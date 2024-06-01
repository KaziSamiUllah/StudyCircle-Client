import React from "react";
import { useForm } from "react-hook-form";

const CreateSession = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-10/12 mx-auto mt-8 ">
        <h1 className="text-center text-3xl font-semibold my-5">Create a new study session</h1>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="sessionTitle"
            >
              Session Title:
            </label>
            <input
              type="text"
              {...register("sessionTitle", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.sessionTitle && (
              <span className="text-red-500 text-xs">
                Session Title is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tutorName"
            >
              Tutor Name:
            </label>
            <input
              type="text"
              {...register("tutorName", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.tutorName && (
              <span className="text-red-500 text-xs">
                Tutor Name is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tutorEmail"
            >
              Tutor Email:
            </label>
            <input
              type="email"
              {...register("tutorEmail", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.tutorEmail && (
              <span className="text-red-500 text-xs">
                Tutor Email is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="sessionDescription"
            >
              Session Description:
            </label>
            <textarea
              {...register("sessionDescription", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
            {errors.sessionDescription && (
              <span className="text-red-500 text-xs">
                Session Description is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tutorEmail"
            >
              Class Duration:
            </label>
            <input
              type="text"
              {...register("classDuration", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.tutorEmail && (
              <span className="text-red-500 text-xs">
                Class duration is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tutorEmail"
            >
              Number of lessons:
            </label>
            <input
              type="number"
              {...register("lessons")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.tutorEmail && (
              <span className="text-red-500 text-xs">
                Class duration is required
              </span>
            )}
          </div>
        </div>
        <div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tutorEmail"
            >
              Registration start date:
            </label>
            <input
              type="date"
              {...register("regStart", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.tutorEmail && (
              <span className="text-red-500 text-xs">
                Registration start date is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tutorEmail"
            >
              Registration end date:
            </label>
            <input
              type="date"
              {...register("regEnd", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.tutorEmail && (
              <span className="text-red-500 text-xs">
                Registration end date is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tutorEmail"
            >
              Class stars from:
            </label>
            <input
              type="date"
              {...register("classStart", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.tutorEmail && (
              <span className="text-red-500 text-xs">
                Class stars date is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tutorEmail"
            >
              Class ends on:
            </label>
            <input
              type="date"
              {...register("classEnd", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.tutorEmail && (
              <span className="text-red-500 text-xs">
                Class end date is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tutorEmail"
            >
              Registration Fee:
            </label>
            <input
              type="number"
              value={0}
              {...register("fee", { disabled: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.tutorEmail && (
              <span className="text-red-500 text-xs">
                Class duration is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tutorEmail"
            >
              Status:
            </label>
            <input
              type="text"
              value="Pending"
              {...register("status", { disabled: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.tutorEmail && (
              <span className="text-red-500 text-xs">
                Class duration is required
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Add other fields similarly */}

      <div className="flex items-center justify-between">
        <button
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary w-full font-bold"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateSession;
