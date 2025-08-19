type TestimonialCardProps = {
  avatar: string;
  name: string;
  role: string;
  quote: string;
  isActive?: boolean;
};

export default function TestimonialCard({
  avatar,
  name,
  role,
  quote,
  isActive = false,
}: TestimonialCardProps) {
  return (
    <div className={`testimonial-card ${isActive ? "active" : ""}`}>
      <div className="avatar-wrapper">
        <img src={avatar} alt={name} className="avatar" />
        <div className="quote-icon">”</div>
      </div>
      <p className="quote">{quote}</p>
      <div className="divider" />
      <h5 className="name">{name}</h5>
      <p className="role">{role}</p>
    </div>
  );
}
