"use client";

import { toast } from "react-toastify";
import { Toast } from "@/app/components";

const PageComponent = () => {
  const notify = () =>
    toast(
      <Toast
        variant="success"
        title="Game collected"
        description="Grand Theft Auto V has been added to your collection"
      />
    );

  return (
    <div>
      <button onClick={notify}>Notify!</button>
    </div>
  );
};

export default PageComponent;
