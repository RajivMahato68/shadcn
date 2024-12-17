import { Link, Mail } from "lucide-react";

export const mails = [
  {
    id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    name: "William Smith",
    email: "williamsmith@example.com",
    subject: "Meeting Tomorrow",
    text: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.\n\nPlease come prepared with any questions or insights you may have. Looking forward to our meeting!\n\nBest regards, William",
    date: "2023-10-22T09:00:00",
    read: true,
    labels: ["meeting", "work", "important"],
  },
  // More mail objects...
];

const MailList = () => {
  return (
    <div className="mail-list">
      {mails.map((mail) => (
        <div
          key={mail.id}
          className={`mail-item ${mail.read ? "read" : "unread"}`}
        >
          <div className="mail-header">
            <h3>{mail.subject}</h3>
            <span>{new Date(mail.date).toLocaleString()}</span>
          </div>
          <p>{mail.text.substring(0, 100)}...</p>
          <div className="mail-actions">
            <Link href={`mailto:${mail.email}`} className="email-link">
              <Mail /> Reply
            </Link>
            <button className="mark-read-btn">
              {mail.read ? "Mark as Unread" : "Mark as Read"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MailList;
