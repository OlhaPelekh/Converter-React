function ContactsPage() {
    const contactsInfo = { phone: "123-456-7890", email: "example@example.com" };
  
    return (
      <div className="container my-5 p-4 bg-dark rounded shadow">
        <h2 className="text-center mb-4 text-white">Contacts Page</h2>
        <div className="text-center text-white">
          <p className="mb-2"><strong>Phone:</strong> {contactsInfo.phone}</p>
          <p><strong>Email:</strong> {contactsInfo.email}</p>
        </div>
      </div>
    );
}

export default ContactsPage;