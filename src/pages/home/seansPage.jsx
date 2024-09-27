import MainSwiper from "./swiper";

const SeansPage = () => {
	return (
		<div className="pt-12 ml-20 mx-auto ">
	<div className="flex  justify-between  items-center mb-12">
 <div className="flex  gap-2  ">
				<button className="gap-2 py-[14px] px-8 bg-[#111] rounded-xl font-medium hover:bg-main_color flex "><img  src="./image/infinity-icon.svg" alt="" />Все</button>
				<button className="gap-2 py-[14px] px-8 bg-[#111] rounded-xl font-medium hover:bg-main_color flex"><img  src="./image/movie-icon.svg " alt="" />Кино</button>
				<button className="gap-2 py-[14px] px-8 bg-[#111] rounded-xl font-medium hover:bg-main_color flex"><img  src="./image/clapperboard-icon.svg " alt="" />Театр</button>
				<button className="gap-2 py-[14px] px-8 bg-[#111] rounded-xl font-medium hover:bg-main_color flex"><img  src="./image/movie_icon_2.png " alt="" />Концерты</button>
				<button className="gap-2 py-[14px] px-8 bg-[#111] rounded-xl font-medium hover:bg-main_color flex"><img  src="./image/ball-icon.svg " alt="" />Спорт</button>
				<button className="gap-2 py-[14px] px-8 bg-[#111] rounded-xl font-medium hover:bg-main_color flex"><img  src="./image/earth-icon.svg " alt="" />Другие</button>
			</div>
   <div>
   <button className="gap-2 py-[14px] px-8 bg-[#111] rounded-xl font-medium hover:bg-main_color flex"><img  src="./image/hall_icon.svg " alt="" />Другие</button>

   </div>
 </div>
 <div>
  <div className="flex items-center justify-between">
   <a href="#">На неделе</a>
   <a className="text-main_color" href="#">Показать все ></a>
  </div>
  <MainSwiper/>
 </div>
		</div>
	);
};

export default SeansPage;
