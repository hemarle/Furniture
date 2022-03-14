import testimonialImage from "../images/Testimonial-bg.png";
import testimonialImage2 from "../images/Testimonial-bg2.png";
import testimonialImage3 from "../images/Testimonial-bg3.png";
import BongImage from "../images/Bong.png";
import IbukImage from "../images/Ibuk.png";
import MpokImage from "../images/Mpok.png";

const testimonialData = [
  {
    author: "Bong Upin",
    location: "Pedagang Asongan",
    testimony:
      "“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“",
    star: 4,
    image: testimonialImage,
    avatar: BongImage,
  },
  {
    author: "Ibuk Sukijan",
    location: "Ibu Rumah Tangga",
    testimony:
      "“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah““",
    star: 3,
    image: testimonialImage2,
    avatar: IbukImage,
  },
  {
    author: "Mpok Ina",
    location: "Karyawan Swasta",
    testimony:
      "“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“",
    star: 5,
    image: testimonialImage3,
    avatar: MpokImage,
  },
];

export default testimonialData;
