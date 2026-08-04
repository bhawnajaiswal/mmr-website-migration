import styles from "./Doctors.module.css";

interface DoctorCardProps {
  imageUrl: string;
  name: string;
  degree: string;
  description: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    googlePlus?: string;
    linkedin?: string;
    instagram?: string;
  };
  index: number;
  animate: boolean;
}

export default function DoctorCard({
  imageUrl,
  name,
  degree,
  description,
  socialLinks = {},
  index,
  animate
}: DoctorCardProps) {
  return (
    <div
      className={`${styles.docCard} ${animate ? styles.docCardVisible : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={styles.docCardImageWrapper}>
        <img
          src={imageUrl}
          alt={name}
          className={styles.docCardImage}
          loading="lazy"
        />
      </div>
      <div className={styles.docCardContent}>
        <h3 className={styles.docCardName}>{name}</h3>
        <span className={styles.docCardDegree}>{degree}</span>
        <p className={styles.docCardDesc}>{description}</p>
        
        {/* Social Icons */}
        <div className={styles.docCardSocial}>
          {socialLinks.facebook && (
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f" />
            </a>
          )}
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter" />
            </a>
          )}
          {socialLinks.googlePlus && (
            <a href={socialLinks.googlePlus} target="_blank" rel="noopener noreferrer" aria-label="Google Plus">
              <i className="fab fa-google-plus-g" />
            </a>
          )}
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in" />
            </a>
          )}
          {socialLinks.instagram && (
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
