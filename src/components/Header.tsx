import { ReactNode } from "react";

// import { PropsWithChildren } from "react";
// type HeaderProps = PropsWithChildren<{ image: { src: string; alt: string } }>;

type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
        {/* Distributing src and alt from image with this shortcut {...image} */}
      <img {...image} />
      {children}
    </header>
  );
}
