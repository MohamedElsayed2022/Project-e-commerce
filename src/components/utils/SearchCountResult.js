import React from "react";
import UnopDropdown from "unop-react-dropdown";
import sort from "../../images/sort.png";
const SearchCountResult = ({ title , onClick}) => {
    const ClickMe = (key)=>{
      // alert(key)
      localStorage.setItem("sortType" , key)
      onClick()

    
    }
    const handler = ()=>{

    }
  return (
    <div className="d-flex justify-content-between pt-3 px-2">
        
      <div className="sub-tile">{title}</div>
      <div className="search-count-text d-flex ">
        <UnopDropdown
          trigger={
            <p className="mx-1">
              <img
                width="20px"
                height="20px"
                className="ms-1"
                src={sort}
                alt=""
              />
              ترتيب  حسب
            </p>
          }
          align="CENTER"
          delay={0}
          onAppear={handler}
          onDisappearStart={handler}
          hover
        >
            <div className="card-filter">
                <div onClick={()=>ClickMe("بدون ترتيب")}  className="border-bottom card-filter-item fw-bold"> بدون ترتيب</div>
                <div onClick={()=>ClickMe("الاكثر مبيعا")} className="border-bottom card-filter-item fw-bold">الاكثر مبيعا</div>
                <div onClick={()=>ClickMe("الاكثر تقييما")} className="border-bottom card-filter-item fw-bold">الاكثر تقيما</div>
                <div  onClick={()=>ClickMe("السعر من الاقل الى الاعلى")} className="border-bottom card-filter-item fw-bold"> السعر من الاقل الى الاعلى</div>
                <div onClick={()=>ClickMe("السعر من الاعلى الى الاقل")} className="border-bottom card-filter-item fw-bold" > السعر من الاعلى الى الاقل</div>

            </div>
        </UnopDropdown>
      </div>
    </div>
  );
};

export default SearchCountResult;
