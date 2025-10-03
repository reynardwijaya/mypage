import React, { useEffect, useRef, useCallback, useMemo } from "react";
import Image from "next/image"; // import Image Next.js
import "./ProfileCard.css";

const DEFAULT_BEHIND_GRADIENT =
  "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)";

const DEFAULT_INNER_GRADIENT =
  "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)";

// ... (fungsi clamp, round, adjust, easeInOutCubic tetap sama)

const ProfileCardComponent = ({
  avatarUrl = "/images/rey.jpeg",
  iconUrl,
  grainUrl,
  behindGradient,
  innerGradient,
  showBehindGradient = true,
  className = "",
  enableTilt = true,
  enableMobileTilt = false,
  mobileTiltSensitivity = 5,
}) => {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);

  const animationHandlers = useMemo(() => {
    if (!enableTilt) return null;
    const updateCardTransform = (offsetX, offsetY, card, wrap) => {
      const width = card.clientWidth;
      const height = card.clientHeight;
      const percentX = clamp((100 / width) * offsetX);
      const percentY = clamp((100 / height) * offsetY);
      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties = {
        "--pointer-x": `${percentX}%`,
        "--pointer-y": `${percentY}%`,
        "--background-x": `${adjust(percentX, 0, 100, 35, 65)}%`,
        "--background-y": `${adjust(percentY, 0, 100, 35, 65)}%`,
        "--pointer-from-center": `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
        "--pointer-from-top": `${percentY / 100}`,
        "--pointer-from-left": `${percentX / 100}`,
        "--rotate-x": `${round(-(centerX / 5))}deg`,
        "--rotate-y": `${round(centerY / 4)}deg`,
      };

      Object.entries(properties).forEach(([property, value]) => {
        wrap.style.setProperty(property, value);
      });
    };
    return { updateCardTransform };
  }, [enableTilt]);

  useEffect(() => {
    if (!enableTilt || !animationHandlers) return;
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      animationHandlers.updateCardTransform(
        e.clientX - rect.left,
        e.clientY - rect.top,
        card,
        wrap
      );
    };

    card.addEventListener("pointermove", handleMove);
    return () => {
      card.removeEventListener("pointermove", handleMove);
    };
  }, [enableTilt, animationHandlers]);

  const cardStyle = useMemo(
    () => ({
      "--icon": iconUrl ? `url(${iconUrl})` : "none",
      "--grain": grainUrl ? `url(${grainUrl})` : "none",
      "--behind-gradient": showBehindGradient
        ? behindGradient ?? DEFAULT_BEHIND_GRADIENT
        : "none",
      "--inner-gradient": innerGradient ?? DEFAULT_INNER_GRADIENT,
    }),
    [iconUrl, grainUrl, showBehindGradient, behindGradient, innerGradient]
  );

  return (
    <div ref={wrapRef} className={`pc-card-wrapper ${className}`} style={cardStyle}>
      <section ref={cardRef} className="pc-card">
        <div className="pc-inside">
          <div className="pc-shine" />
          <div className="pc-glare" />
          <div className="pc-content pc-avatar-content">
            <Image
              className="avatar"
              src={avatarUrl}
              alt="Profile avatar"
              width={200}
              height={200}
              loading="lazy"
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);
export default ProfileCard;
