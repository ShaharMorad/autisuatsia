# app.py
from flask import Flask, request,render_template
from flask import jsonify

import email, smtplib, ssl

from email import encoders
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Generate QR code from site address

import qrcode

app = Flask(__name__)

# Display your index page
@app.route("/run")
def omri():
    data = request.args.get('url')
    receiver_email = request.args.get('mail')
    # data = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    # output file name
    filename = "qrcode.png"
    # generate qr code
    img = qrcode.make(data)
    # save img to a file
    img.save(filename)

    subject = "An email with attachment from Python"
    body = "This is an email with attachment sent from Python"
    sender_email = "jd2211808@gmail.com"
    # receiver_email = input("Type your email and press enter:")
    password = "John123456"

    # Create a multipart message and set headers
    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = receiver_email
    message["Subject"] = subject
    message["Bcc"] = receiver_email  # Recommended for mass emails

    # Add body to email
    message.attach(MIMEText(body, "plain"))

    # filename = "document.pdf"  # In same directory as script

    # Open PDF file in binary mode
    with open(filename, "rb") as attachment:
        # Add file as application/octet-stream
        # Email client can usually download this automatically as attachment
        part = MIMEBase("application", "octet-stream")
        part.set_payload(attachment.read())

    # Encode file in ASCII characters to send by email
    encoders.encode_base64(part)

    # Add header as key/value pair to attachment part
    part.add_header(
        "Content-Disposition",
        f"attachment; filename= {filename}",
    )

    # Add attachment to message and convert message to string
    message.attach(part)
    text = message.as_string()

    # Log in to server using secure context and send email
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email, text)

    return 'Hello World'

if __name__ == '__main__':
    app.run()