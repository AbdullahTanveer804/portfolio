import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Link,
  Preview,
  Section,
  Heading,
} from "@react-email/components";
import * as React from "react";

interface ContactFormEmailProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactFormEmail = ({
  name,
  email,
  phone,
  message,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Message from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={section}>
            <Heading style={h1}>New Contact Form Submission</Heading>
            <Text style={text}>
              <strong>From:</strong> {name}
            </Text>
            <Text style={text}>
              <strong>Email:</strong>{" "}
              <Link href={`mailto:${email}`} style={link}>
                {email}
              </Link>
            </Text>
            <Text style={text}>
              <strong>Phone:</strong> {phone}
            </Text>
            <Text style={text}>
              <strong>Message:</strong>
            </Text>
            <Text style={messageBox}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactFormEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "580px",
};

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "500",
  lineHeight: "1.25",
  margin: "0 0 24px",
};

const text = {
  color: "#444",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "0 0 12px",
};

const messageBox = {
  backgroundColor: "#ffffff",
  padding: "16px",
  borderRadius: "4px",
  border: "solid 1px #dedede",
  color: "#444",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "0",
  whiteSpace: "pre-wrap",
};

const link = {
  color: "#2754C5",
  textDecoration: "underline",
};
