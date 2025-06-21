import React from "react";

interface ContactTemplateProps {
  fullname: string;
  email: string;
  subject: string;
  message: string;
  isConfirmation?: boolean;
}

export const ContactTemplate: React.FC<ContactTemplateProps> = ({
  fullname,
  email,
  subject,
  message,
  isConfirmation = false,
}) => {
  if (isConfirmation) {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Confirmation de contact - Portfolio</title>
        </head>
        <body
          style={{
            margin: 0,
            padding: 0,
            fontFamily: "Arial, sans-serif",
            backgroundColor: "#0f0f23",
          }}
        >
          <div
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              backgroundColor: "#0f0f23",
            }}
          >
            {/* Header */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%)",
                padding: "40px 20px",
                textAlign: "center",
                borderRadius: "0 0 20px 20px",
              }}
            >
              <h1
                style={{
                  color: "#ffffff",
                  margin: 0,
                  fontSize: "28px",
                  fontWeight: "bold",
                  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                ✅ Confirmation de Contact
              </h1>
              <p
                style={{
                  color: "#ffffff",
                  margin: "10px 0 0 0",
                  fontSize: "16px",
                  opacity: 0.9,
                }}
              >
                Votre message a été reçu avec succès !
              </p>
            </div>

            {/* Main Content */}
            <div
              style={{
                padding: "40px 30px",
                backgroundColor: "#1a1a2e",
                margin: "20px",
                borderRadius: "15px",
                border: "1px solid #38bdf8",
                boxShadow: "0 10px 30px rgba(56, 189, 248, 0.1)",
              }}
            >
              <h1
                style={{
                  color: "#38bdf8",
                  margin: "0 0 20px 0",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                Merci pour votre message !
              </h1>

              <p
                style={{
                  color: "#e2e8f0",
                  fontSize: "16px",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                Bonjour {fullname},
              </p>

              <p
                style={{
                  color: "#e2e8f0",
                  fontSize: "16px",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                J&apos;ai bien reçu votre message et je vous remercie de
                m&apos;avoir contacté.
              </p>

              <p
                style={{
                  color: "#e2e8f0",
                  fontSize: "16px",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                Je vais examiner votre demande avec attention et vous répondre
                dans les plus brefs délais.
              </p>

              <p
                style={{
                  color: "#e2e8f0",
                  fontSize: "16px",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                }}
              >
                En attendant ma réponse, n&apos;hésitez pas à consulter mon
                portfolio pour découvrir mes projets récents.
              </p>

              <p
                style={{
                  color: "#e2e8f0",
                  fontSize: "16px",
                  lineHeight: "1.6",
                }}
              >
                Cordialement,
                <br />
                Mamadou Sy
              </p>
            </div>

            {/* Footer */}
            <div
              style={{
                textAlign: "center",
                padding: "30px 20px",
                backgroundColor: "#0f0f23",
              }}
            >
              <div
                style={{
                  backgroundColor: "#16213e",
                  padding: "20px",
                  borderRadius: "12px",
                  border: "1px solid #38bdf8",
                }}
              >
                <p
                  style={{
                    color: "#94a3b8",
                    margin: "0",
                    fontSize: "12px",
                    lineHeight: "1.4",
                  }}
                >
                  💼 <strong>Portfolio de Mamadou Sy</strong>
                  <br />
                  Développeur Full-Stack & Mobile
                  <br />
                  Spécialisé en Next.js, React Native, Node.js
                  <br />
                  📧 mamadousy1254@gmail.com
                </p>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nouveau contact - Portfolio</title>
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#0f0f23",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#0f0f23",
          }}
        >
          {/* Header */}
          <div
            style={{
              background:
                "linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%)",
              padding: "40px 20px",
              textAlign: "center",
              borderRadius: "0 0 20px 20px",
            }}
          >
            <h1
              style={{
                color: "#ffffff",
                margin: 0,
                fontSize: "28px",
                fontWeight: "bold",
                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              🚀 Nouveau Contact Projet
            </h1>
            <p
              style={{
                color: "#ffffff",
                margin: "10px 0 0 0",
                fontSize: "16px",
                opacity: 0.9,
              }}
            >
              Quelqu&apos;un souhaite collaborer avec vous !
            </p>
          </div>

          {/* Main Content */}
          <div
            style={{
              padding: "40px 30px",
              backgroundColor: "#1a1a2e",
              margin: "20px",
              borderRadius: "15px",
              border: "1px solid #38bdf8",
              boxShadow: "0 10px 30px rgba(56, 189, 248, 0.1)",
            }}
          >
            {/* Contact Info */}
            <div
              style={{
                backgroundColor: "#16213e",
                padding: "25px",
                borderRadius: "12px",
                marginBottom: "30px",
                border: "1px solid #38bdf8",
                borderLeft: "4px solid #38bdf8",
              }}
            >
              <h2
                style={{
                  color: "#38bdf8",
                  margin: "0 0 20px 0",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                📋 Informations du Contact
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "#38bdf8",
                      color: "#ffffff",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      minWidth: "80px",
                      display: "inline-block",
                    }}
                  >
                    Prénom et Nom
                  </span>
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    <strong>{fullname}</strong>
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "#38bdf8",
                      color: "#ffffff",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      minWidth: "80px",
                      display: "inline-block",
                    }}
                  >
                    Email
                  </span>
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    {email}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "#38bdf8",
                      color: "#ffffff",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      minWidth: "80px",
                      display: "inline-block",
                    }}
                  >
                    Sujet
                  </span>
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    {subject}
                  </span>
                </div>
              </div>
            </div>

            {/* Message */}
            <div
              style={{
                backgroundColor: "#16213e",
                padding: "25px",
                borderRadius: "12px",
                border: "1px solid #38bdf8",
                borderLeft: "4px solid #38bdf8",
              }}
            >
              <h2
                style={{
                  color: "#38bdf8",
                  margin: "0 0 20px 0",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                💬 Message
              </h2>

              <div
                style={{
                  color: "#e2e8f0",
                  fontSize: "16px",
                  lineHeight: "1.6",
                  backgroundColor: "#0f0f23",
                  padding: "20px",
                  borderRadius: "8px",
                  border: "1px solid #38bdf8",
                  whiteSpace: "pre-wrap",
                }}
              >
                {message}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              textAlign: "center",
              padding: "30px 20px",
              backgroundColor: "#0f0f23",
            }}
          >
            <div
              style={{
                backgroundColor: "#1a1a2e",
                padding: "25px",
                borderRadius: "12px",
                border: "1px solid #38bdf8",
              }}
            >
              <h3
                style={{
                  color: "#38bdf8",
                  margin: "0 0 15px 0",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                🎯 Prochaines Étapes
              </h3>
              <p
                style={{
                  color: "#e2e8f0",
                  margin: "0 0 20px 0",
                  fontSize: "14px",
                  lineHeight: "1.5",
                }}
              >
                Contactez rapidement ce prospect pour discuter de son projet et
                établir une relation professionnelle.
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "15px",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href={`mailto:${email}?subject=Re: ${subject}`}
                  style={{
                    backgroundColor: "#38bdf8",
                    color: "#ffffff",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                  }}
                >
                  📧 Répondre par Email
                </a>
              </div>
            </div>

            <div
              style={{
                marginTop: "20px",
                padding: "20px",
                backgroundColor: "#16213e",
                borderRadius: "12px",
                border: "1px solid #38bdf8",
              }}
            >
              <p
                style={{
                  color: "#94a3b8",
                  margin: "0",
                  fontSize: "12px",
                  lineHeight: "1.4",
                }}
              >
                💼 <strong>Portfolio de Mamadou Sy</strong>
                <br />
                Développeur Full-Stack & Mobile
                <br />
                Spécialisé en NextJS, React, React Native, Node.js, Integration
                IA, Automatisation IA
                <br />
                📧 mamadousy1254@gmail.com
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

// Alias pour compatibilité avec l'ancien nom
export const ContactForm = ContactTemplate;
