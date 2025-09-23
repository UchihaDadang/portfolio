import { motion } from "motion/react";

export default function TechStack() {

    const techstackItems = [
        {
            id: 1,
            title: 'HTML',
            icon:'/src/assets/icons/HTML5.svg'
        },
        {
            id: 2,
            title: 'CSS',
            icon:'/src/assets/icons/CSS3.svg'
        },
        {
            id: 3,
            title: 'Bootstrap',
            icon:'/src/assets/icons/Bootstrap.svg'
        },
        {
            id: 4,
            title: 'Tailwind',
            icon:'/src/assets/icons/Tailwind-CSS.svg'
        },
        {
            id: 5,
            title: 'Javascript',
            icon:'/src/assets/icons/JavaScript.svg'
        },
        {
            id: 6,
            title: 'React.JS',
            icon:'/src/assets/icons/React.svg'
        },
        {
            id: 7,
            title: 'Next.JS',
            icon:'/src/assets/icons/Next.js.svg'
        },
        {
            id: 8,
            title: 'Node.JS',
            icon:'/src/assets/icons/Node.js.svg'
        },
        {
            id: 9,
            title: 'Hapi.JS',
            icon: '/src/assets/icons/Hapi.svg'
        },
        {
            id: 10,
            title: 'MYSQL',
            icon:'/src/assets/icons/MySQL.svg'
          
        },
    ]


    return(
    <section className="w-full py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Tech Stack
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {techstackItems.map((item, i) => (
            <motion.article
              key={item.id}
              className="flex flex-col items-center text-center p-4 rounded-xl shadow-sm hover:shadow-md bg-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <motion.img
                src={item.icon}
                alt={item.title}
                className="w-16 h-16 object-contain mb-3"
                whileHover={{ rotate: 10 }}
              />
              <p className="text-sm font-medium text-gray-700">{item.title}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    )
}