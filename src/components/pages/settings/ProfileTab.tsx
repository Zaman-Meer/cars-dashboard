import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "@nextui-org/react";
import { CakeIcon, EmailIcon, HomeIcon, MaleSignIcon } from "@/icons";
import { Image } from "@nextui-org/react";

// Define the FormData interface
interface FormData {
  address: string;
  street: string;
  email: string;
  dob: string;
  gender: string;
}

const schema = yup.object().shape({
  address: yup.string().required("Address is required"),
  street: yup.string().required("Street Address is required"),
  email: yup.string().email().required("Email is required"),
  dob: yup.string().required("Date of Birth is required"),
  gender: yup.string().required("Gender is required"),
});

const inputStyle = {
  inputWrapper: "px-[14px] h-12",
  input: "text-grayDark2",
  label: "text-grayDark4 text-[14px] font-medium mb-[10px]",
};

const ProfileTab = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      address: "",
      street: "",
      email: "",
      dob: "",
      gender: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex flex-col gap-[6px] border-b border-b-[#E9EAEC] pb-[30px]">
        <h2 className="text-[20px] font-bold text-primaryDark1">Profile</h2>
        <p>Update your photo and personal details here.</p>
      </div>
      <form
        className="w-full flex flex-col gap-[30px]  border-b border-b-[#E9EAEC] pb-[30px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full md:w-[80%] flex justify-between items-center gap-[36px]">
          <Input
            {...register("address")}
            size="md"
            radius="lg"
            color="primary"
            variant="bordered"
            label="Live in"
            labelPlacement="outside"
            placeholder="Zuichi, Switzerland"
            isInvalid={!!errors.address}
            errorMessage={errors.address?.message}
            isDisabled={isSubmitting}
            startContent={<HomeIcon />}
            classNames={inputStyle}
          />
          <Input
            {...register("street")}
            size="md"
            radius="lg"
            color="primary"
            variant="bordered"
            label="Street Address"
            labelPlacement="outside"
            placeholder="2445 Crosswind Drive"
            isInvalid={!!errors.street}
            errorMessage={errors.street?.message}
            isDisabled={isSubmitting}
            startContent={<HomeIcon />}
            classNames={inputStyle}
          />
        </div>
        <Input
          {...register("email")}
          size="md"
          radius="lg"
          color="primary"
          variant="bordered"
          label="Email Address"
          labelPlacement="outside"
          placeholder="uihutofficial@gmail.com"
          isInvalid={!!errors.email}
          errorMessage={errors.email?.message}
          isDisabled={isSubmitting}
          startContent={<EmailIcon />}
          className="w-full md:w-[80%]"
          classNames={inputStyle}
        />
        <div className="w-full md:w-[80%] flex justify-between items-center gap-[36px]">
          <Input
            {...register("dob")}
            size="md"
            radius="lg"
            color="primary"
            variant="bordered"
            label="Date Of Birth"
            labelPlacement="outside"
            placeholder="07.12.195"
            isInvalid={!!errors.dob}
            errorMessage={errors.dob?.message}
            isDisabled={isSubmitting}
            startContent={<CakeIcon />}
            classNames={inputStyle}
          />
          <Input
            {...register("gender")}
            size="md"
            radius="lg"
            color="primary"
            variant="bordered"
            label="Gender"
            labelPlacement="outside"
            placeholder="Male"
            isInvalid={!!errors.gender}
            errorMessage={errors.gender?.message}
            isDisabled={isSubmitting}
            startContent={<MaleSignIcon />}
            classNames={inputStyle}
          />
        </div>
      </form>
      <div className="w-full border-b border-b-[#E9EAEC] pb-[30px]">
        <div className="w-full md:w-[80%]  flex justify-between items-center gap-6">
          <div className="flex justify-start items-center gap-[73px]">
            <div className="flex flex-col justify-start items-start gap-1">
              <h3 className="font-medium text-primaryDark1">Your photo</h3>
              <p className="text-sm leading-[21px] text-grayDark4">
                This will be displayed on your profile.
              </p>
            </div>
            <Image
              src="/assets/avatar.png"
              alt="user profile picture"
              className="w-[64px] h-[64px] object-cover"
              classNames={{
                wrapper: "w-16 h-16",
                img: "object-cover",
              }}
              radius="full"
            />
          </div>
          <div className="flex justify-end items-center gap-1">
            <Button variant="light" className="text-grayDark4 font-medium">
              Delete
            </Button>
            <Button
              variant="light"
              color="primary"
              className="text-[#A162F7] font-medium"
            >
              Update
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;
