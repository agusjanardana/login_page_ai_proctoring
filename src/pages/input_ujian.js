// import "../style/login.scss";
import "../style/input_ujian.scss";
import TelkomLogo from "../assets/telkomlogo.png";
import OtakLogo from "../assets/otak.png";
import OwlLogo from "../assets/owl.png";
import SatuLogo from "../assets/primary.png";
import { useLocation } from "react-router-dom";

export function InputUjian() {
  const isErrorUjian = true;

  // Dapatkan informasi path saat ini
  const location = useLocation();

  // Tentukan warna hr berdasarkan path
  const hrColor = location.pathname === "/" ? "white" : "black";
  const telkomColor = location.pathname === "/" ? "white" : "black";
  return (
    <div className="container">
      <div className="row_input">
        <div className="column_input">
          <img className="telkom_logo" src={TelkomLogo} />
          <a>Mulai Ujian Anda!</a>

          <div className="wrapper_input">
            <input type="text" placeholder="Masukkan kode ujian" />
            <p>Gabung sebagai Pengawas</p>
          </div>
          {isErrorUjian && (
            <a className="error">
              Kode Ujian salah, masukkan kembali dengan benar!
            </a>
          )}
          <div className="atau">atau</div>
          <button className="button_create_new_exam">Buat Ujian Baru</button>
        </div>

        <div className="column_input">
          <img className="owl_logo" src={OwlLogo}></img>
        </div>
      </div>
      <div style={{ marginTop: "3rem" }}></div>

      <div className="row_box">
        <div className="box">
          <a>User Manual - Peserta</a>
        </div>
        <div className="box">
          <a>User Manual - Pengawas</a>
        </div>
        <div className="box">
          <a>User Manual - Management</a>
        </div>
      </div>

      <div class="footer">
        <div class="wrapper_footer">
          {/* check if router is in /input */}

          <hr style={{ backgroundColor: hrColor }}></hr>
          <div class="wrapper_item">
            <div class="footer_text">
              <p style={{ color: telkomColor }}>© 2023 Telkom University</p>
            </div>
            <div class="wrapper_image">
              <img className="satu_logo" src={SatuLogo}></img>
              <img className="otak_logo" src={OtakLogo}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
