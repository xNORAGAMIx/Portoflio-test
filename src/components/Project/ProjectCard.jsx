/* eslint-disable react/prop-types */
const ProjectCard = ({ project }) => {
  return (
    <div className="p-4 bg-white bg-opacity-50 shadow-xl rounded-xl overflow-hidden max-w-sm sm:max-w-md md:max-w-sm lg:max-w-sm mx-auto text-black transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 sm:h-56 md:h-64 object-cover border-4 rounded-3xl"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-center">{project.name}</h3>
        <p className="text-sm sm:text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          eveniet amet. Commodi debitis doloremque iusto nostrum animi? Quae,
          ullam qui!
        </p>
        <div className="mt-4 flex flex-col sm:flex-row justify-between">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-2 sm:mb-0 sm:mr-2 text-center transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 text-center transition-colors duration-300"
          >
            Live Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
