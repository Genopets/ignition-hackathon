import { useCallback, useRef, useState } from 'react';

const isTouchEvent = (event: TouchEvent) => `touches` in event;

const preventDefault = (event: TouchEvent) => {
  if (!isTouchEvent(event)) return;

  if (event?.touches.length < 2 && event.preventDefault) {
    event.preventDefault();
  }
};

interface IUseLongPress {
  shouldPreventDefault: boolean;
  delay: number;
  onLongPress?: (event: TouchEvent) => void;
  onClick?: () => void;
}

const useLongPress = ({
  shouldPreventDefault = true,
  delay = 300,
  onClick,
  onLongPress,
}: IUseLongPress) => {
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const timeout = useRef<NodeJS.Timeout>();
  const target = useRef<HTMLElement>();

  const start = useCallback(
    (event) => {
      if (shouldPreventDefault && event.target) {
        event.target.addEventListener(`touchend`, preventDefault, {
          passive: false,
        });
        target.current = event.target;
      }
      timeout.current = setTimeout(() => {
        if (onLongPress) onLongPress(event);
        setLongPressTriggered(true);
      }, delay);
    },
    [onLongPress, delay, shouldPreventDefault],
  );

  const clear = useCallback(
    (event, shouldTriggerClick = true) => {
      if (timeout.current) clearTimeout(timeout.current);
      if (onClick && shouldTriggerClick && !longPressTriggered) onClick();
      setLongPressTriggered(false);
      if (shouldPreventDefault && target.current) {
        target?.current?.removeEventListener(`touchend`, preventDefault);
      }
    },
    [shouldPreventDefault, onClick, longPressTriggered],
  );

  return {
    onMouseDown: (e: MouseEvent) => start(e),
    onTouchStart: (e: TouchEvent) => start(e),
    onMouseUp: (e: MouseEvent) => clear(e),
    onMouseLeave: (e: MouseEvent) => clear(e, false),
    onTouchEnd: (e: TouchEvent) => clear(e),
  };
};

export default useLongPress;
