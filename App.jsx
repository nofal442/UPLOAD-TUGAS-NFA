function App() {
  return (
    <>
      {/* Header */}
      <nav className="d-flex flex-wrap align-items-center justify-content-md-between py-3 border-bottom container">
        <a href="/" className="d-inline-flex align-items-center text-decoration-none">
          <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
          <span className="nav-link px-2 fw-bold">Bookstore</span>
        </a>
        <ul className="nav nav-pills justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2">Home</a></li>
          <li><a href="#" className="nav-link px-2">Book</a></li>
          <li><a href="#" className="nav-link px-2">Team</a></li>
          <li><a href="#" className="nav-link px-2">Contact</a></li>
        </ul>
        <div className="text-end">
          <button type="button" className="btn btn-outline-primary me-2">Login</button>
          <button type="button" className="btn btn-primary">Register</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container text-center rounded-2 border shadow p-5 my-4">
        <h1 className="display-5 fw-bold">Atomic Habits</h1>
        <p className="lead">Perubahan kecil yang memberikan hasil luar biasa. Cara mudah dan terbukti untuk membentuk kebiasaan baik.</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-4">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Buy Now</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button>
        </div>
        <img src="https://picsum.photos/720/400" className="img-fluid rounded" alt="Atomic Habits Cover" />
      </div>

      {/* Best Seller Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-light">Best Seller Collection</h2>
          <p className="lead text-muted">Temukan buku-buku terbaik yang telah menginspirasi jutaan pembaca di seluruh dunia.</p>
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
            {[1, 2, 3].map((item) => (
              <div className="col" key={item}>
                <div className="card h-100 shadow-sm">
                  <img src={`https://picsum.photos/300/200?random=${item}`} className="card-img-top" alt="Book Thumbnail" />
                  <div className="card-body">
                    <h5 className="card-title">Judul Buku {item}</h5>
                    <p className="card-text">Deskripsi singkat mengenai isi buku dan manfaat yang bisa didapatkan oleh pembaca.</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <button className="btn btn-sm btn-outline-primary">View</button>
                    <small className="text-muted">Updated recently</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5 container">
        <h2 className="text-center mb-4">Our Team</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {["Acer", "Nadia", "Rizky"].map((name, index) => (
            <div className="col" key={index}>
              <div className="card h-100 text-center">
                <img src={`https://i.pravatar.cc/300?img=${index + 1}`} className="card-img-top rounded-circle mx-auto mt-3" style={{ width: "150px", height: "150px" }} alt={name} />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">Frontend Developer passionate about clean UI and user experience.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your name" />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" />
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Your message..."></textarea>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary px-5">Send</button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 border-top text-center">
        <p className="text-muted mb-0">© 2025 NF ACADEMY. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;