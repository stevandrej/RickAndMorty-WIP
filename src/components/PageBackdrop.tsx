interface PageBackdropProps {
  image: string;
}

export default function PageBackdrop({ image }: PageBackdropProps) {
  return (
    <div
      className={`inset-0 absolute -z-10 bg-cover bg-center blur`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    ></div>
  );
}
