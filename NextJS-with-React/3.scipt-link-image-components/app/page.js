import Image from "next/image";


export default function Home() {
  return (
    <div>
      <div className="container">
      {/* <img className='mx-auto h-60 my-4 rounded-xl' src='https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg'/> */}
        <Image
          src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}