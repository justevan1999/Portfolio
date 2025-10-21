const Footer = () => (
  <div className="footer">
    <form className="footer-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstname">FIRST NAME:</label>
          <input type="text" id="firstname" name="firstname" />
        </div>

        <div className="form-group">
          <label htmlFor="lastname">LAST NAME:</label>
          <input type="text" id="lastname" name="lastname" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">EMAIL ID:</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form-group">
          <label htmlFor="message">MESSAGE:</label>
          <textarea
            id="message"
            name="message"
            className="message-box"
            placeholder="Type your message here..."
          ></textarea>
        </div>
      </div>

      <div className="form-icons">
        <div className="btn-div">
          <button
            style={{
              padding: "1px 32px",
              borderRadius: "30px",
              backgroundColor: "transparent",
              color: "#fff",
              border: "1px solid #fff",
            }}
          >
            SUBMIT
          </button>
        </div>
        <div className="icons-div">
          <div>
            <img src="/instagram.png" alt="" />
          </div>
          <div>
            <img src="/linkedin.png" alt="" />
          </div>
          <div>
            <img src="/github.png" alt="" />
          </div>
          <div>
            <img src="/mail.png" alt="" />
          </div>
        </div>
      </div>


    </form>
  </div>

);

export default Footer;
