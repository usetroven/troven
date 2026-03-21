import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
  firstName: string;
  dashboardUrl: string;
}

export default function WelcomeEmail({
  firstName = "there",
  dashboardUrl = "http://localhost:3000/dashboard",
}: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Troven.Stack — let&apos;s build something great</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Welcome to Troven.Stack 👋</Heading>
          <Text style={paragraph}>Hi {firstName},</Text>
          <Text style={paragraph}>
            Thanks for joining Troven.Stack. Your creator account is ready — you
            can start building your storefront and selling digital products right
            away.
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href={dashboardUrl}>
              Go to your dashboard
            </Button>
          </Section>
          <Text style={paragraph}>
            If you have any questions, just reply to this email.
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            Troven.Stack · You&apos;re receiving this because you signed up for an
            account.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "40px 20px",
  borderRadius: "8px",
  maxWidth: "560px",
};

const heading = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#1a1a1a",
  marginBottom: "24px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#404040",
};

const btnContainer = {
  textAlign: "center" as const,
  marginTop: "32px",
  marginBottom: "32px",
};

const button = {
  backgroundColor: "#7c3aed",
  borderRadius: "6px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  padding: "12px 24px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "24px 0",
};

const footer = {
  color: "#9ca3af",
  fontSize: "12px",
};
