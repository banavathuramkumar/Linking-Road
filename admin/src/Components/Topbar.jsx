import {
 FiSearch,
 FiBell
} from "react-icons/fi";



const Topbar = () => {



return (


<div className="w-full h-[64px] bg-white border-b-[0.8px] border-[#E2E8F0] px-8 flex items-center justify-end gap-6 shrink-0">



{/* SEARCH */}


<div className="w-64 h-[33.6px] rounded-lg bg-[#F1F5F9] flex items-center gap-2 px-4">


<FiSearch className="text-slate-400"/>


<input

placeholder="Search automations, leads..."

className="w-full bg-transparent outline-none text-xs text-slate-500"

/>


</div>






{/* Divider */}


<div className="h-6 border-l border-[#E2E8F0]"/>






{/* Bell */}


<div className="w-9 h-9 rounded-lg p-2 relative flex items-center justify-center">


<FiBell className="text-slate-500 text-lg"/>



<div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-pink-500"/>


</div>








{/* Profile */}


<div className="w-10 h-8 pl-2 flex items-center">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-200 to-gray-500"/>
</div>





</div>


);


};


export default Topbar;