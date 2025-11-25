type ContactCardInfo = {
  name: string;
  role: string;
  bio: string;
  phone: string;
  email: string;
};

type ContactCardPhoto = {
  src: string;
  alt?: string;
};

type ContactCardProps = {
  info: ContactCardInfo;
  photo: ContactCardPhoto;
  className?: string;
};

const PhoneIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M5.5 4.5c0-.6.4-1 1-1h2.2c.5 0 .9.3 1 .8l.7 3c.1.5-.1 1-.6 1.2l-1.7.8a13.7 13.7 0 006.3 6.3l.8-1.7c.2-.5.7-.7 1.2-.6l3 .7c.5.1.8.5.8 1v2.2c0 .6-.4 1-1 1C10.6 19.4 4.6 13.4 5.5 4.5z"
      fill="currentColor"
    />
  </svg>
);

const MailIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M4 6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v9A2.5 2.5 0 0117.5 18h-11A2.5 2.5 0 014 15.5v-9z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M5.5 6.5l6.1 4.2a1 1 0 001.1 0l6.1-4.2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ContactCard({
  info,
  photo,
  className = "",
}: ContactCardProps) {
  return (
    <div
      className={`relative min-w-[37%] max-w-4xl text-left rounded-3xl bg-tertiary`}
    >
      {/* Left info area */}
      <div className="flex-1 w-[65%] px-8 py-4">
        <h2 className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">
          {info.name}
        </h2>
        <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-quinary">
          {info.role}
        </p>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-quinary md:text-lg">
          {info.bio}
        </p>

        {/* Contact pills */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-secundary shadow-sm ring-1 ring-sky-100">
            <PhoneIcon />
            <span>{info.phone}</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-secundary shadow-sm ring-1 ring-sky-100">
            <MailIcon />
            <span>{info.email}</span>
          </div>
        </div>
      </div>

      {/* Right photo area */}
      <img
        src={photo.src}
        alt={photo.alt ?? info.name}
        className={`h-full w-auto absolute bottom-0 right-0 object-contain drop-shadow-xl ${className}`}
      />
    </div>
  );
}
