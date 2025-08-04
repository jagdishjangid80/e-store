import React from "react";

const reviews = [
  {
    name: "Olive Jhon",
    designation: "Client Designation",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit diam nonummy nibh euismod tincidunt. Ut wisi enim ad minim veniam. Laoreet dolore magna aliquam erat voluptat.",
    stars: 5,
    color: "orange",
  },
  {
    name: "Smith Jhon",
    designation: "Client Designation",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit diam nonummy nibh euismod tincidunt. Ut wisi enim ad minim veniam. Laoreet dolore magna aliquam erat voluptat.",
    stars: 5,
    color: "green",
  },
  {
    name: "Jhon Devid",
    designation: "Client Designation",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit diam nonummy nibh euismod tincidunt. Ut wisi enim ad minim veniam. Laoreet dolore magna aliquam erat voluptat.",
    stars: 5,
    color: "red",
  },
];

const getColorClasses = (color) => {
  const colorMap = {
    orange: "bg-orange-500 text-orange-500",
    green: "bg-green-600 text-green-600",
    red: "bg-red-500 text-red-500",
  };
  return colorMap[color] || "bg-gray-500 text-gray-500";
};

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto h-auto py-10 px-4">
      <div className="w-full text-center mb-10">
        <p className="text-3xl font-semibold">Customer Review</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {reviews.map((item, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-xl bg-white shadow-lg border-t-8 ${getColorClasses(
              item.color
            ).replace("bg-", "border-")}`}
            
          >
            <div className="flex items-start gap-4">
              {/* Avatar Circle */}
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold ${getColorClasses(
                  item.color
                )}`}
              >
                👤
              </div>

               
              {/* Text Content */}
              <div className="flex-1">
                <p className="text-gray-600 text-sm mb-2">“{item.review}”</p>
                <p className="font-semibold text-base">{item.name}</p>
                <p className="text-xs text-gray-500">{item.designation}</p>
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i < item.stars
                          ? getColorClasses(item.color).split(" ")[1]
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;