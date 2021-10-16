import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import Pattern from '@/assets/svgs/eso1bg.svg';

const Container = styled.div`
  display: flex;
  place-content: center;
  gap: 2rem;
  height: 100%;
  flex-direction: column;
  overflow: scroll;
`;

const BackgroundSection = styled.div`
  background: linear-gradient(320deg, rgb(24, 26, 28) 50%, rgb(0, 57, 63) 100%);
  inset: 0px;
  overflow: hidden;
  pointer-events: none;
  position: fixed;
  z-index: -1;
  width: 100%;
  transition: all 0.5s ease-in-out;
`;

const LandingCenter = styled.div`
  max-width: 100%;
  position: relative;
`;

const CenterPattern = styled.div`
  width: 600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  user-select: none;
  position: fixed;
  > div {
    width: 100%;

    img {
      width: 100%;
    }
  }
  img {
    opacity: 0.2;
  }

  @media (max-width: 767px) {
    width: 300px;
    overflow: visible;
  }
  @media (max-height: 430px) {
    height: auto;
    min-height: 100vh;
    overflow: visible;
  }
`;

const LandinInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  @media (max-height: 430px) {
    height: 100%;
  }
`;

const TermsConditionOuter = styled.div`
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  position: absolute;
  min-height: calc(100vh - 100px);
  left: 50%;
  transform: translateX(-50%);
  top: 100px;
  z-index: 1;
  p {
    font-size: 14px;
    color: #fffdeb;
    span {
      font-family: 'optician', sans-serif;
      display: block;
    }
  }
`;
const PageTitle = styled.div`
  color: #00ffc8;
  h4 {
    font-family: 'mokoto_glitchregular';
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 30px;
    letter-spacing: 11.25px;
    margin-top: 0;
    margin-bottom: 20px;
  }
  span {
    letter-spacing: 3.42857px;
    font-size: 13px;
    line-height: 25px;
    display: block;
    font-family: 'optician', sans-serif;
  }
`;
function TermsConditions() {
  return (
    <Container>
      <BackgroundSection />
      <LandingCenter>
        <LandinInner className="term">
          <TermsConditionOuter>
            <PageTitle>
              <h4>
                <span>terms of</span>service
              </h4>
            </PageTitle>
            <p>
              Welcome to genopets.me (the “Site”) owned and operated by Witty
              Elite Limited, a British Virgin Islands company (collectively,
              “Genopets,” “we,” “our”, or “us”). Genopets provides an online
              service to play an NFT game (the “Service”). The terms “you,”
              “your,” and “yours” refer to anyone accessing, viewing, browsing,
              visiting or using the Site and/ or the Service.
            </p>
            <p>
              IMPORTANT - PLEASE READ CAREFULLY: THESE TERMS OF SERVICE (THE,
              “TERMS”) NOT ONLY CONSTITUTE A LEGALLY BINDING TERMS AND APPLY TO
              YOUR USE OF THE SITE AND/OR THE SERVICE. BY ACCESSING, VIEWING,
              BROWSING, VISITING OR USING THE SITE AND/OR THE SERVICE, YOU AGREE
              AND ACKNOWLEDGE TO BE BOUND BY THESE TERMS, WHETHER YOU ARE A
              “USER” (WHICH MEANS YOU HAVE LOGGED IN VIA AN ACCOUNT OR IN ANY
              OTHER MANNER OFFERED BY GENOPETS) OR A “VISITOR” (WHICH MEANS THAT
              YOU SIMPLY BROWSE THE SITE). IF YOU DO NOT AGREE TO BE BOUND BY
              THESE TERMS, PLEASE DO NOT USE THE SERVICE. YOU MAY PRINT A COPY
              OF THESE TERMS HERE. WE RESERVE THE RIGHT TO MODIFY THESE TERMS AT
              ANY TIME, AND EACH SUCH MODIFICATION SHALL BE EFFECTIVE UPON
              POSTING ON THE SITE. ALL MATERIAL MODIFICATIONS WILL APPLY
              PROSPECTIVELY ONLY. YOUR CONTINUED USE OF THE SITE AND/OR THE
              SERVICE FOLLOWING ANY SUCH MODIFICATION CONSTITUTES YOUR AGREEMENT
              TO BE BOUND BY AND YOUR ACCEPTANCE OF THESE TERMS, AS MODIFIED
              AND, IF ANY MODIFICATION IS NOT ACCEPTABLE TO YOU, YOUR SOLE
              REMEDY AND RECOURSE IS TO DISCONTINUE USE OF THE SITE AND THE
              SERVICE. THEREFORE, IT IS IMPORTANT FOR YOU TO REVIEW THESE TERMS
              REGULARLY. YOU AGREE NOT TO USE THE SERVICE IN ANY WAY THAT
              COMPETES WITH THE SITE AND/OR THE SERVICE AND OUR TECHNOLOGIES.
            </p>
            <p>
              <span>Eligibility</span>
              In order to use the Site and Service, you must be 18 years of age
              or over, or of the legal age to form a binding contract in your
              jurisdiction if that age is greater than 18 years. If you are
              under the age of 18 or the applicable legal age in your
              jurisdiction, you can use the Site and Service only in conjunction
              with, and under the supervision of, your parent or guardian who
              has agreed to these Terms of Service on your behalf.
            </p>
            <p>
              <span>Description of Service</span>
              The Service enables you to create Non Fungible Tokens (NFTs) on
              the Solana blockchain which you will use in the Service while
              playing the Genopets game. To use the Service, you are required to
              connect a compatible Solana blockchain wallet (such as Phantom
              wallet) to the Service. Genopets is NOT affiliated with Solana or
              the blockchain wallet you choose to connect to the Service. You
              acknowledge and agree that Genopets is only providing you the
              tools to create NFTs on Solana and is not responsible for your
              private keys associated with the wallet you choose to connect to
              the Service. It is your responsibility at all times to keep your
              blockchain wallet keys secure.
            </p>
            <p>
              <span>Your License</span>
              We grant you a limited license to use the Service for your
              personal non-commercial use in accordance with these Terms, any
              instructions and guidelines posted on the Site and all applicable
              laws, rules and regulations.
            </p>
            <p>
              Except for the limited license expressly granted herein, you
              acknowledge and agree that we shall own all right, title and
              interest in and to the Service, including without limitation all
              intellectual property rights therein. The Service is for your
              personal use and is not for resale or other transfer or
              disposition to any other person or entity. In addition, you
              specifically agree not to: (a) reverse engineer, decompile,
              disassemble, translate, modify, alter or otherwise change the
              underlying software and technology used by us to make available
              the Service (collectively, the “Genopets Software”), or any part
              thereof; (b) attempt to derive the source code, audio library or
              structure of the Genopets Software, or (c) sell, rent, lease,
              distribute, assign, sublicense, convey, transfer, pledge as
              security or otherwise encumber or transfer (including by loan or
              gift) the rights and licenses granted hereunder.
            </p>
            <p>
              We reserve the right to discontinue any aspect of the Site and/or
              the Service at any time. We further reserve the right to terminate
              your license to use the Service at any time and for any reason, or
              in the future, to charge for commercial usage.
            </p>
            <p>
              <span>Your Account</span>
              In order to use certain Service, you will have to provide a unique
              email address and username and connect it with a Solana wallet. We
              may refuse to grant you, and you may not use, a username that is
              already being used by someone else, that impersonates another
              person, that belongs to another person (without that person’s
              prior consent), that violates the intellectual property or other
              rights of any person, that is vulgar or otherwise offensive, or
              that we reject for any other reason, at our sole discretion.
            </p>
            <p>
              <span>Your Account</span>
              In order to use certain Service, you will have to provide a unique
              email address and username and connect it with a Solana wallet. We
              may refuse to grant you, and you may not use, a username that is
              already being used by someone else, that impersonates another
              person, that belongs to another person (without that person’s
              prior consent), that violates the intellectual property or other
              rights of any person, that is vulgar or otherwise offensive, or
              that we reject for any other reason, at our sole discretion.
            </p>
            <p>
              You agree to: (a) provide true, accurate, current, and complete
              information as prompted by the registration form; and (b) maintain
              and update such information to keep it true, accurate, current,
              and complete at all times. We reserve the right to suspend or
              terminate your registration, without warning, if you are found to
              have misrepresented any registration information. You agree to
              immediately notify us of any unauthorized use of your password or
              account, or any other breach of security. You will be solely
              responsible for safeguarding your password and also for any
              actions under your account, whether authorized by you or not. We
              cannot and will not be liable for any loss or damage arising from
              your failure to comply with this section.
            </p>
            <p>
              <span>Your Responsibility</span>
              You are solely responsible for your use of the Site and the
              Service. The Service allows you to upload content to the Site such
              as graphics, photos, sounds, music, videos, audiovisual
              combinations, interactive features and other materials
              (collectively, “Your Content”) that may be viewed on, accessed
              through, or contributed to the Service. You shall be solely
              responsible for Your Content and the consequences of uploading and
              editing Your Content with the Service. You affirm, represent, and
              warrant that you own or have the necessary licenses, rights,
              consents, and permissions for Your Content uploaded and edited
              through use of the Service or the Site. You retain ownership
              rights in Your Content. However, by submitting Your Content to the
              Site, you grant us a worldwide, non-exclusive, royalty-free,
              sub-licenseable and transferable license to use, reproduce,
              distribute, prepare derivative works of, and display, Your Content
              in connection with the Site and the Service and our (and our
              successors’ and affiliates’). You further warrant that Your
              Content will not contain third-party copyrighted material, or
              material that is subject to other third-party proprietary rights,
              unless you have permission from the rightful owner of the material
              or you are otherwise legally entitled to post the material and to
              grant us all the licenses granted herein. We do not permit
              copyright infringing activities and infringement of intellectual
              property rights through the use of the Service, and we will remove
              Your Content, or any part thereof, if properly notified that such
              content infringes on intellectual property rights of a third
              party. We reserve the right to remove Your Content without prior
              notice.
            </p>
            <p>
              <span>Our Content</span>
              You acknowledge and agree that the Site uses and contains
              proprietary and confidential technology and information owned by
              or licensed to us, and protected by applicable intellectual
              property and other laws and international treaties. The
              trademarks, service marks, and logos featured with the Service and
              the Site, including, without limitation, Genopets logo and design
              (collectively, the “Marks”), are owned by or licensed to us,
              subject to trademark, copyright, and other intellectual property
              rights under the law and may only be reproduced as provided in
              these Terms and/or with our express prior written permission.
              Other trademarks that appear on the Site that are not owned by or
              licensed to us (e.g., trademarks associated with third-party
              websites shown with links featured on the Service) are the
              property of their respective owners, who may or may not be
              affiliated with, connected to, or sponsored by us.
            </p>
            <p>
              <span>Privacy Policy</span>
              Acceptance of these Terms of Service constitutes acceptance of our
              Privacy Policy, which can be found here:
              https://www.genopets.me/privacy-policy. If you do not agree to the
              Privacy Policy or these Terms, please discontinue using the Site
              and the Service.
            </p>
            <p>
              <span>Disclaimer of Warranties and Limitation of Liability</span>
              WE PROVIDE THE SITE AND THE SERVICE “AS IS” AND WITHOUT ANY
              WARRANTY OR CONDITION, EXPRESS, IMPLIED OR STATUTORY. YOU AGREE
              THAT YOUR USE OF THE SITE AND/OR THE SERVICE SHALL BE AT YOUR SOLE
              RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
              WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICE AND
              YOUR USE THEREOF. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT
              THE ACCURACY OR COMPLETENESS OF THE SERVICE AND ASSUME NO
              LIABILITY OR RESPONSIBILITY FOR ANY (I) ERRORS, MISTAKES, OR
              INACCURACIES OF CONTENT, (II) PERSONAL INJURY OR PROPERTY DAMAGE,
              OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF
              OUR SERVICE, (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE
              SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL
              INFORMATION STORED THEREIN, (IV) ANY INTERRUPTION OR CESSATION OF
              TRANSMISSION TO OR FROM OUR SERVICE, AND/OR (IV) ANY COMPUTER
              BUGS, VIRUSES, OR SIMILAR MECHANISMS WHICH MAY BE TRANSMITTED TO
              OR THROUGH OUR SERVICE BY ANY THIRD PARTY. WE DO NOT WARRANT,
              ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR
              SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE OR
              ANY HYPERLINKED SERVICE OR FEATURED IN ANY BANNER OR OTHER
              ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE
              RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND
              THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE
              PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY
              ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE
              CAUTION WHERE APPROPRIATE.
            </p>
            <p>
              You understand and agree that your use of the Site and the Service
              is at your own discretion and risk and that you will be solely
              responsible for any damages that arise from such use including,
              without limitation, for loss of data and or any type of
              malfunction to your computer. IN NO EVENT SHALL WE BE LIABLE TO
              YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR
              CONSEQUENTIAL DAMAGES WHATSOEVER RESULTING FROM YOUR USE OF THE
              SITE AND/OR THE SERVICE AND ANY (I) ERRORS AND OMISSIONS,
              MISTAKES, OR INACCURACIES OF CONTENT, (II) PERSONAL INJURY OR
              PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR
              ACCESS TO AND USE OF OUR SERVICE, (III) ANY UNAUTHORIZED ACCESS TO
              OR USE OF OUR UNSECURED AND SECURE SERVERS AND/OR ANY AND ALL
              PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN,
              (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM OUR
              SERVICE, (IV) ANY COMPUTER BUGS, VIRUSES, OR SIMILAR MECHANISMS
              WHICH MAY BE TRANSMITTED TO OR THROUGH OUR SERVICE BY ANY THIRD
              PARTY, AND/OR (V) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR
              ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF YOUR USE OF
              ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE
              AVAILABLE VIA THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT,
              TORT, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT WE ARE ADVISED
              OF THE POSSIBILITY OF SUCH DAMAGES. THE FOREGOING LIMITATION OF
              LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW IN
              THE APPLICABLE JURISDICTION.
            </p>
            <p>
              YOUR ONLY RIGHT WITH RESPECT TO ANY DISSATISFACTION WITH THE SITE
              AND/OR THE SERVICE OR WITH US SHALL BE TO TERMINATE USE OF THE
              SITE AND THE SERVICE. Indemnification
            </p>
            <p>
              To the extent permitted by applicable law, you agree to defend,
              indemnify and hold harmless us, our parent corporation, owners,
              members, officers, directors, employees and agents, from and
              against any and all claims, damages, obligations, losses,
              liabilities, costs or debt, and expenses (including but not
              limited to attorney&apos;s fees) arising from: (i) your use of and
              access to the Site and/or the Service; (ii) your violation of
              these Terms; (iii) your violation of any third party right,
              including without limitation any copyright, property, or privacy
              right; or (iv) any claim that Your Content caused damage to a
              third party. This defense and indemnification obligation will
              survive these Terms and your use of the Service.
            </p>
            <p>
              <span>Termination</span>
              We reserve the right to terminate or restrict your use of the
              Service, without notice, for any or no reason whatsoever. In
              addition, we will immediately terminate your access to the Site
              and the Service if you are determined to be a repeat infringer of
              others’ intellectual property rights and/or engage in other
              activity in violation of these Terms. General
            </p>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the State of California, excluding its conflicts of
              laws principles. The United Nations Convention on Contracts for
              the International Sale of Products is excluded and does not apply
              to these Terms. If any dispute relating in any way to these Terms
              or the policies or your use of the Website shall be submitted to
              confidential arbitration in Los Angeles County, California, USA,
              except that, to the extent you have in any manner violated or
              threatened to violate our intellectual property rights, we may
              seek injunctive or other appropriate relief in any state or
              federal court in the State of California, USA and you consent to
              exclusive jurisdiction and venue in such courts. Arbitration under
              these Terms shall be conducted under the rules then prevailing of
              the American Arbitration Association. The arbitrator’s award shall
              be binding and may be entered as a judgment in any court of
              competent jurisdiction. To the fullest extent permitted by
              applicable law, no arbitration under these Terms shall be joined
              to an arbitration involving any other party subject to these
              Terms, whether through class arbitration proceedings or otherwise.
              The failure to require performance of any provision shall not
              affect our right to require performance at any time thereafter,
              nor shall a waiver of any breach or default of these Terms
              constitute a waiver of any subsequent breach or default or a
              waiver of the provision itself. If any portion of these Terms is
              found to be unenforceable, such portion will be modified to
              reflect the parties’ intention and only to the extent necessary to
              make it enforceable, and the remaining provisions of these Terms
              will remain in full force and effect. These Terms constitute the
              entire and exclusive understanding and agreement between you and
              us regarding this subject matter, and supersedes any and all prior
              or contemporaneous agreements or understandings, written and oral.
            </p>
          </TermsConditionOuter>
          <CenterPattern>
            <Image src={Pattern} alt="Pattern" />
          </CenterPattern>
        </LandinInner>
      </LandingCenter>
    </Container>
  );
}

export default TermsConditions;
