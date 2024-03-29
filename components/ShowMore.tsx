"use client"
import React from "react";
import {ShowMoreProps} from "@/types";
import {CustomButton} from "@/components/index";

const ShowMore = ({pageNumber, isNext,setLimit}: ShowMoreProps) => {
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10
       setLimit(newLimit)
    }

    return (
        <div className="w-full  flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton title="Show more"
                              btnType='button'
                              containerStyles="bg-primary-blue rounded-full text-white"
                              handleClick={handleNavigation}
                              rightIcon={""}
                />
            )}
        </div>
    )
}
export default ShowMore;