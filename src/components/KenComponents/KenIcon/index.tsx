import Image from "next/image";

interface KenIconProps {
  variant?: "small" | "medium" | "large" | "extraSmall";
  icon: string | React.ComponentType<any>;
  styles?: React.CSSProperties;
  iconType?: "img" | "";
}

const KenIcon = ({
  variant = "small",
  icon: Icon,
  styles = {},
  iconType = "",
}: KenIconProps) => {
  const getStyles = () => {
    switch (variant) {
      case "extraSmall":
        return { fontSize: 8 };
      case "medium":
        return { fontSize: 24 };
      case "large":
        return { fontSize: 32 };

      default:
        return { fontSize: 16 };
    }
  };

  return (
    <>
      {iconType === "img" ? (
        <Image
          src={Icon as string}
          alt="icon"
          style={{ ...getStyles(), ...styles }}
          width={getStyles().fontSize}
          height={getStyles().fontSize}
        />
      ) : (
        <Icon style={{ ...getStyles(), ...styles }} />
      )}
    </>
  );
};

export default KenIcon;
