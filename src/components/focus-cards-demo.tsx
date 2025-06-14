import { FocusCards } from "@/components/ui/focus-cards";

/**
 * FocusCardsDemo Component
 *
 * Displays the 'Featured Projects' section using the FocusCards component.
 * Uses six local project images and titles as specified.
 */
export default function FocusCardsDemo() {
  // Array of featured project cards
  const cards = [
    {
      title: "Prince Aga Khan",
      src: "/TallStructures/agakhan.png",
    },
    {
      title: "Westline Signature",
      src: "/TallStructures/westline.png",
    },
    {
      title: "Satara Hills",
      src: "/TallStructures/satarahills.png",
    },
    {
      title: "Kalyan Residency",
      src: "/TallStructures/kalyan.png",
    },
    {
      title: "Bank of India",
      src: "/TallStructures/boi.png",
    },
    {
      title: "Tata Memorial Hospital",
      src: "/TallStructures/tatamemorial.png",
    },
  ];

  return <FocusCards cards={cards} />;
}
