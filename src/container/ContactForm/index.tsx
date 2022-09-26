import { useState } from 'react';

export default function ContactForm() {
  const [values, setValues] = useState({
    firstName: ``,
    lastName: ``,
    email: ``,
    message: ``,
  });

  return (
    <div className="pt-8">
      <hr className="my-8" />
    </div>
  );
}
