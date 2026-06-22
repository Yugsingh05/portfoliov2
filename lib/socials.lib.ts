export const CONTACT_EMAIL = "singhyugkumarvijayshankar@gmail.com";
export const LOCATION = "Gandhinagar, India";

export type SocialKey = "github" | "linkedin" | "twitter" | "instagram";

export type Social = {
  key: SocialKey;
  label: string;
  handle: string;
  href: string;
};

export const socials: Social[] = [
  {
    key: "github",
    label: "GitHub",
    handle: "@Yugsingh05",
    href: "https://github.com/Yugsingh05",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    handle: "Yug Singh",
    href: "https://www.linkedin.com/in/yug-singh-9a67342aa/",
  },
  {
    key: "twitter",
    label: "Twitter / X",
    handle: "@SinghYugkumar",
    href: "https://twitter.com/SinghYugkumar",
  },
  {
    key: "instagram",
    label: "Instagram",
    handle: "@yugsingh0_5",
    href: "https://instagram.com/yugsingh0_5",
  },
];
