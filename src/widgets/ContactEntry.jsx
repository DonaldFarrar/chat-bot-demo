export default function ContactEntry(props) {
  return (
    <>
      <div className="contact-entry-conatiner">
        Name: {props.name} Title: {props.title} Phone: {props.phone}
      </div>
    </>
  );
}
