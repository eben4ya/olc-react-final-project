import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";

interface IProps {
  titleFolderForm: string;
  titleFileForm: string;
}

const NotesAfterSection = ({ titleFolderForm, titleFileForm }: IProps) => {
  return (
    <section className="absolute top-0 right-0 flex flex-col justify-center items-center w-[70%] h-screen border-l-2">
      <form className="flex flex-col w-[95%] h-full font-normal leading-normal">
        <p className="w-fit h-fit mt-[53px] text-[17.067px]">
          {titleFolderForm} / {titleFileForm}
        </p>
        <input
          className="mt-[29px] text-[42.67px] font-bold tracking-wider"
          type="text"
          placeholder="Title"
        />
        <textarea
          rows={3}
          className="mt-[12px] text-[19.2px] tracking-wide"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor ligula nec pretium faucibus. Phasellus accumsan a augue et efficitur."
        />
        <textarea
          rows={25}
          className="mt-[32px] text-[19.2px]"
          placeholder="Aenean maximus ullamcorper est, nec pretium dui dapibus ut. Nullam arcu tortor, dignissim id orci ac, vestibulum posuere ipsum. Suspendisse vel augue eget libero scelerisque euismod. Suspendisse vulputate erat id est ultrices, vel ultrices ligula ornare. Aliquam libero lacus, egestas eu arcu in, sodales pharetra ipsum. Nulla semper metus vel porttitor ornare. Praesent ultricies, justo ac volutpat rhoncus, nulla urna consectetur massa, a porttitor felis sapien at nibh.
                         Aenean maximus ullamcorper est, nec pretium dui dapibus ut. Nullam arcu tortor, dignissim id orci ac, vestibulum posuere ipsum. Suspendisse vel augue eget libero scelerisque euismod. Suspendisse vulputate erat id est ultrices, vel ultrices ligula ornare. Aliquam libero lacus, egestas eu arcu in, sodales pharetra ipsum. Nulla semper metus vel porttitor ornare. Praesent ultricies, justo ac volutpat rhoncus, nulla urna consectetur massa, a porttitor felis sapien at nibh.
                         Aenean maximus ullamcorper est, nec pretium dui dapibus ut. Nullam arcu tortor, dignissim id orci ac, vestibulum posuere ipsum. Suspendisse vel augue eget libero scelerisque euismod. Suspendisse vulputate erat id est ultrices, vel ultrices ligula ornare. Aliquam libero lacus, egestas eu arcu in, sodales pharetra ipsum. Nulla semper metus vel porttitor ornare. Praesent ultricies, justo ac volutpat rhoncus, nulla urna consectetur massa, a porttitor felis sapien at nibh.
                         Aenean maximus ullamcorper est, nec pretium dui dapibus ut. Nullam arcu tortor, dignissim id orci ac, vestibulum posuere ipsum. Suspendisse vel augue eget libero scelerisque euismod. Suspendisse vulputate erat id est ultrices, vel ultrices ligula ornare. Aliquam libero lacus, egestas eu arcu in, sodales pharetra ipsum. Nulla semper metus vel porttitor ornare. Praesent ultricies, justo ac volutpat rhoncus, nulla urna consectetur massa, a porttitor felis sapien at nibh.
                         Aenean maximus ullamcorper est, nec pretium dui dapibus ut. Nullam arcu tortor, dignissim id orci ac, vestibulum posuere ipsum. Suspendisse vel augue eget libero scelerisque euismod. Suspendisse vulputate erat id est ultrices, vel ultrices ligula ornare. Aliquam libero lacus, egestas eu arcu in, sodales pharetra ipsum. Nulla semper metus vel porttitor ornare. Praesent ultricies, justo ac volutpat rhoncus, nulla urna consectetur massa, a porttitor felis sapien at nibh."
        />
        <button
          className="absolute z-10 bottom-[10%] right-[10%] w-[10%] h-fit p-[10px] bg-[#F8F8F8] border-[1px] border-solid border-[#BEBEBE] rounded-[8px] drop-shadow-xl "
          type="submit"
        >
          <div className="flex justify-center items-center gap-[10px] ">
            <FaArrowDownLong className="w-[20px] h-[20px]" />
            <p>Save</p>
          </div>
        </button>
      </form>
    </section>
  );
};

export default NotesAfterSection;
