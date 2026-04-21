const galleryTrack = document.getElementById("galleryTrack");

if (galleryTrack) {
  const galleryItems = Array.from(galleryTrack.children);
  galleryItems.forEach((item) => {
    const clone = item.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    galleryTrack.appendChild(clone);
  });
}

const bookingForm = document.getElementById("bookingForm");
const formNote = document.getElementById("formNote");

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(bookingForm);
    const eventType = formData.get("eventType");
    const eventDate = formData.get("eventDate");
    const location = formData.get("location");
    const guestCount = formData.get("guestCount");
    const details = formData.get("details");

    const message = [
      "Hello Ultimate DJ Xenia, I would like to book Spin City.",
      "",
      `Event Type: ${eventType}`,
      `Date: ${eventDate}`,
      `Location: ${location}`,
      `Expected Guest Count: ${guestCount}`,
      `Extra Details: ${details || "None provided"}`,
    ].join("\n");

    formNote.textContent =
      "Opening WhatsApp with your booking details so you can send the request directly.";

    window.open(
      `https://wa.me/2349064163781?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener"
    );
  });
}
