import React from "react";

function Card() {
  const features = [
    {
      img: "https://i.imgur.com/cHtXS3c.png",
      title: "Track Expenses",
      description: "Monitor and categorize daily expenses with ease.",
    },
    {
      img: "https://i.imgur.com/ExOJcne.png",
      title: "Savings Goal",
      description: "Set and track savings targets to reach financial goals faster.",
    },
    {
      img: "https://i.imgur.com/m4b245I.png",
      title: "Investments",
      description: "Manage your stocks, mutual funds, and crypto portfolios in real-time.",
    },
    {
      img: "https://i.imgur.com/nyqwkiV.png",
      title: "Bills & Payments",
      description: "Keep track of all your utility, credit card, and loan payments.",
    },
    {
      img: "https://i.imgur.com/L7mTDDO.png",
      title: "Budget Planning",
      description: "Plan your monthly and yearly budgets for better financial management.",
    },
    {
      img: "https://i.imgur.com/PDtlTQi.png",
      title: "Financial Planning",
      description: "Plan for major life goals like buying a house, car, kids’ education, and retirement.",
    },
    {
      img: "https://i.imgur.com/7u7mFVJ.png",
      title: "Business Expense Management",
      description: "Track and manage your business expenses with detailed insights.",
    },
    {
      img: "https://i.imgur.com/fZwSl9D.png",
      title: "Family Budgeting",
      description: "Manage and allocate funds for your family's monthly expenses effectively.",
    },
  ];

  return (
    <div style={styles.cardContainer}>
      {features.map((feature, index) => (
        <div key={index} style={styles.card} className="feature-card">
          <div style={styles.imageContainer}>
            <img src={feature.img} alt={feature.title} style={styles.cardImg} />
          </div>
          <div style={styles.cardBody}>
            <h2 style={styles.cardTitle}>{feature.title}</h2>
            <p style={styles.cardText}>{feature.description}</p>
          </div>
        </div>
      ))}
      <style>{`
        .feature-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
}

const styles = {
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    padding: "40px",
    justifyItems: "center",
    background: "#f8f9fa",
  },
  card: {
    width: "100%",
    maxWidth: "350px",
    background: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    textAlign: "center",
    paddingBottom: "10px",
  },
  imageContainer: {
    width: "100%",
    height: "220px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f0f0f0",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
  },
  cardImg: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain", 
  },
  cardBody: {
    padding: "20px",
  },
  cardTitle: {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  cardText: {
    fontSize: "1rem",
    color: "#555",
    lineHeight: "1.5",
  },
};

export default Card;
