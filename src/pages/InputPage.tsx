import React from "react";
import Input from "../components/Input";

type Props = {};

const InputPage = (props: Props) => {
  return (
    <div className="p-5 pl-20 space-y-10 h-[110vh] lg:h-[180vh] xl:h-[150vh]">
      <h1 className="text-4xl  font-bold font-Poppins  text-[#4f4f4f] w-1/2">
        Input
      </h1>
      <div className="w-[90%] flex space-x-24 lg:space-x-32 items-center">
        <div className="space-y-2">
          <p className="font-UbuntuMono">&lt;Input /&gt;</p>
          <Input />
        </div>

        <div className="space-y-2">
          <p className="font-UbuntuMono">&lt;Input error /&gt;</p>
          <Input error />
        </div>

        <div className="space-y-2">
          <p className="font-UbuntuMono">&lt;Input disabled /&gt;</p>
          <Input disabled />
        </div>
      </div>

      <div className="w-[90%] flex space-x-32 items-center">
        <div className="space-y-2">
          <p className="font-UbuntuMono">
            &lt;Input helperText='Some intersting text' /&gt;
          </p>
          <Input helperText="Some intersting text" />
        </div>

        <div className="space-y-2">
          <p className="font-UbuntuMono">
            &lt;Input helperText='Some intersting text' error /&gt;
          </p>
          <Input helperText="Some intersting text" error />
        </div>
      </div>

      <div className="w-[90%] flex space-x-24 items-center">
        <div className="space-y-2">
          <p className="font-UbuntuMono">&lt;Input startIcon='call' /&gt;</p>
          <Input startIcon="call" />
        </div>

        <div className="space-y-2">
          <p className="font-UbuntuMono">&lt;Input endIcon='fastfood' /&gt;</p>
          <Input endIcon="fastfood" />
        </div>

        <div className="space-y-2">
          <p className="font-UbuntuMono">&lt;Input value='text' /&gt;</p>
          <Input value="text" />
        </div>
      </div>

      <div className="w-[90%] flex space-x-32 items-center">
        <div className="space-y-2">
          <p className="font-UbuntuMono">&lt;Input sizes="sm" /&gt;</p>
          <Input sizes="sm" />
        </div>

        <div className="space-y-2">
          <p className="font-UbuntuMono">&lt;Input sizes="md" /&gt;</p>
          <Input sizes="md" />
        </div>
      </div>

      <div className="w-[90%] flex space-x-32 items-center">
        <div className="space-y-2">
          <p className="font-UbuntuMono">&lt;Input fullWidth /&gt;</p>
          <Input fullWidth />
        </div>
      </div>

      <div className="w-[90%] flex space-x-32 items-center">
        <div className="space-y-2">
          <p className="font-UbuntuMono">&lt;Input multiline row="4" /&gt;</p>
          <Input multiline row="4" />
        </div>
      </div>
    </div>
  );
};
export default InputPage;
