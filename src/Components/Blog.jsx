import React from 'react';
import vector from '/assets/All Images/Vector.png'
import { Accordion } from 'flowbite-react';

const Blog = () => {
    return (
        <div> 
            <div className="flex justify-start items-baseline gap-64 pt-8 pb-8">
                <img className='w-52 h-42' src={vector} alt="" />
                <h1 className='text-3xl font-extrabold'>All Blogs</h1>
            </div>
            <div className=' bg-white py-10 px-12'>
                <Accordion alwaysOpen={true}>
                    <Accordion.Panel>
                        <Accordion.Title>
                        When should you use context API?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                            React's powerful context API feature enables components to share data without passing it down through props. Your code will become more modular and easier to maintain as a result, and the process of passing data across the component tree will be made simpler. When you have data that must be accessed by numerous components at various levels of your component hierarchy, you should think about using the Context API. To communicate themes, authentication status, language preferences, or app configuration across all the components, for instance, you may utilize the Context API. Using Context API, you may give an easily accessible central source of data rather than the complexity of transferring data through many tiers of components.  
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                        What is a custom hook?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                <strong>Custom hook</strong> is a reusable function that may be shared between components and contains a particular piece of functionality. It enables programmers to take complex or repetitive code out of components and reuse it in a more straightforward manner. The same lifecycle techniques and state management tools are available to custom hooks as they are to standard React hooks. For custom hooks, the word "use" is used at the beginning of the function name. Depending on the logic contained in the hook, a custom hook used in a component may return state, functions, or a combination of the two. Overall, using custom hooks in React applications is a great way to write reusable, modular code.
                            </p>
                        
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                        What is useRef? 
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                            React has a built-in hook called useRef that enables you to make mutable references that persist during component re-renders. It gives back a ref object that can have a value or a reference to a DOM element. Changes to the ref object, unlike state variables, do not cause the component to re-render, making it a helpful tool for managing specific types of data or interactions that do not call for a visual update. It can be used for a number of things, including managing focus in forms, DOM element targeting, and saving prior state variable values. It is a potent tool for manipulating changeable data in React and can assist you in developing more efficient applications
                            </p>
                            
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                        What is useMemo?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                            React's built-in useMemo hook enables you to cache and memoize function call results for later use. It accepts a function as input along with an array of dependents, and it outputs a memoized value. By minimizing unnecessary re-renders, the memoized value is only re-computed when the dependencies change, which might improve the performance of your application. For expensive calculations or intricate processes that don't alter frequently, useMemo is especially helpful. You can minimize the number of times the calculation must be done and enhance the functionality of your application by memorizing the outcome. In general, useMemo is a strong tool for React application optimization and can assist you in developing user interfaces that are more effective and responsive.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </div>
    );
};

export default Blog;