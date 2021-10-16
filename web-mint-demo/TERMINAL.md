# Terminal Component

### Configurations

|           | Type               | Description                                                                                                       |
| --------- | ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| subscribe | function           | a function received data after typing line complete                                                               |
| IsFade    | boolean            | true or false, it's fade the text `opacity:0.3`                                                                   |
| IsAction  | boolean            | field is define choose option component and it's required `options` field                                         |
| visible   | boolean            | start the typing text when value is true                                                                          |
| content   | string or string[] | array of string work as group typing,eg: after all the array of content type then received subscription callback. |

**Example 1:**

`IsFade:2`: text fade-out on 2nd element after current text.
`visible:true`: start the text typing without wainting

```
{
	content: `boot.ini`,
	visible:  true,
	IsFade:  2,
},
```

**Example 2:**
`content:[]`, typing the text in sequence and recevied the single callback instead of multiple.

```
{
	content: [
			`initiate genopet resonance sequence`,
			`...`,
			`...`,
			`initiate hemisync protocol`,
			`...`,
			`initiate genopet resonance sequence`,
			`...`,
			`triangulate position`,
			`...`,
			`location determined`,
			`...`,
	],
	IsFade:  2,
},
```

**Example 3:**
`hasIndicator` define the typing text have loading indicator with `3s` duration.
`IndicatorDelay` define the duration of loading indicator.

```
{
	content:  `human/genopet sync begin`,
	IsFade:  2,
	hasIndicator:  true,
	IndicatorDelay:  3,
},
```

**Example 4:**

-> terminal start typing first array of element `step 1`
-> after recevied callback in subscription, start typing `step 2` and show the loading indicator till 3 seconds.
show the custom element/compoenent (`next` prop), after 3s complete of showing indicator.

```
{
	content:  `step 1`,
},
{
	content:  `step 2`,
	IsFade:  1,
	hasIndicator:  true,
	IndicatorDelay:  3,
	next: QuestionType.Answer_1
},
{
	id: QuestionsType.TEXT_3
	content:  `step 3`
},
```
