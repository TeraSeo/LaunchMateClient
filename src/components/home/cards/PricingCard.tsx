"use client";

import React from "react";
import { Card, CardContent, CardActions, Chip, Button } from "@mui/material";
import { fontSize } from '@/constants/FontSize';
import PricingCardTitleText from "../texts/PricingCardTitleText";
import PriceText from "../texts/PriceText";
import PriceFeatures from "../texts/PriceFeatures";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  featured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  buttonText,
  featured = false,
}) => {
  return (
    <Card
      sx={{
        height: "100%",
        position: "relative",
        transform: featured ? "scale(1.05)" : "none",
        border: featured
          ? "2px solid #2979FF"
          : "1px solid rgba(255, 255, 255, 0.1)",
        background: featured
          ? "rgba(41, 121, 255, 0.1)"
          : "rgba(255, 255, 255, 0.05)",
        overflow: "visible"
      }}
    >
      {featured && (
        <Chip
          label="Most Popular"
          color="primary"
          sx={{
            position: "absolute",
            top: -12,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1,
            fontSize: fontSize.caption
          }}
        />
      )}
      <CardContent sx={{ textAlign: "center", pt: featured ? 4 : 3 }}>
        <PricingCardTitleText title={title} />
        <PriceText price={price} />
        <PriceFeatures features={features} />
      </CardContent>
      <CardActions sx={{ p: 3, pt: 0 }}>
        <Button
          variant={featured ? "contained" : "outlined"}
          fullWidth
          size="large"
          sx={{
            background: featured
              ? "linear-gradient(135deg, #FFFFFF 0%, #E0E0E0 100%)"
              : undefined,
            color: featured ? "#121212" : undefined,
            fontSize: fontSize.button.large,
          }}
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default PricingCard;