import { Body, Button, Container, Head, Hr, Html, Img, Preview, Section, Text } from "@react-email/components";

import * as React from "react";

interface EmailTemplateProps {
  actionLabel: string,
  buttonText: string,
  href: string
}

export const EmailTemplate = ({ actionLabel, buttonText, href }: EmailTemplateProps) => {
  <Html>
    <Head />

    <Preview>
      The marketplace for high-quality digital goods.
    </Preview>
    
    <Body style={main}>
      <Container style={container}>
      
      <Img
        src={`${process.env.NEXT_PUBLIC_SERVER_URL}/hippo-newsletter-sign-up.png`}
        width="150"
        height="150"
        alt="DigitalHippo"
        style={logo}
      />
      
      <Text style={paragraph}>Hi there,</Text>
      
      <Text style={paragraph}>
        Welcome to DigitalHippo, the marketplace for high quality digital
        goods. Use the button below to {actionLabel}.
      </Text>
      
      <Section style={btnContainer}>
        <Button style={button} href={href}>
          {buttonText}
        </Button>
      </Section>
      
      <Text style={paragraph}>
        Best,
        <br />
        the DigitalHippo team
      </Text>
      
      <Hr style={hr} />
      
      <Text style={footer}>
        If you did not request this email, you can safely ignore it.
      </Text>
      
      </Container>
    </Body>
  </Html>
}