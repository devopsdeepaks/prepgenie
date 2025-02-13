"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { animate, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { chatSession } from '@/utils/GeminiAiModal'
import { db } from '@/utils/db'
import { v4 as uuidv4 } from 'uuid';
import { LoaderCircle } from 'lucide-react'
import moment from 'moment'
import { ContactUs } from '@/utils/schema'


const Header = () => {
    const path = usePathname();
    const [hash, setHash] = useState('');

    const router = useRouter();
    const { user } = useUser();


    //contact us form code
    const [openDialog, setOpenDialog] = useState(false)
    const [Name, setName] = useState("")
    const [Description, setDescription] = useState("")
    const [Phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)

    const onSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        console.log(Name, Description, Phone)



        if (Name && Description && Phone) {
            const resp = await db.insert(ContactUs)
                .values({
                    name: Name,
                    description: Description,
                    phone: Phone,
                    email: email,
                    createdAt: moment().format('DD-MM-YYYY'),
                });
            console.log("Inserted Id:", resp);
            if (resp) {
                console.log('Form Submitted Successfully');
                setName("");
                setDescription("");
                setPhone("");
            }

        } else {
            console.log('Data not submitted');
        }
        setOpenDialog(false);
        setLoading(false)
    }






    useEffect(() => {
        const handleHashChange = () => {
            setHash(window.location.hash);
        };

        handleHashChange(); // Initial load
        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);
    return (
        <>
            <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}>
                <motion.div
                    className='fixed transform translate-x-1/2 z-50 top-0 left-0 w-1/2 text-white flex justify-between items-center p-3 bg-black border rounded-2xl my-7 shadow-sm'
                >
                    <Image
                        src={'/logo.png'}
                        width={160}
                        height={100}
                        alt="PrepGenie"
                        color='white' />
                    <ul
                        className='hidden items-center md:flex space-x-6'>
                        <motion.li
                            className={`hover:text-primary hover:font-bold transition-all text-gray-300 cursor-pointer border-white
                        ${path == '/' && hash !== '#about' && hash != '#services' ? 'text-white bg-[#131315] rounded-lg p-4 font-bold' : '}'} `
                            }
                            whileHover={{ scale: 1.1 }}
                            onClick={() => {
                                router.push("/")
                                setHash('')
                            }}>
                            Home
                        </motion.li>
                        {user ? <motion.li
                            className={`hover:text-primary text-gray-300 hover:font-bold transition-all cursor-pointer
                        ${path == '/dashboard' && 'text-white bg-[rgb(19,19,21)] rounded-lg p-4 font-bold'} `
                            }
                            whileHover={{ scale: 1.1 }}
                            onClick={() => router.push("/dashboard")}>Interview
                        </motion.li> :
                            <motion.li
                                className={`hover:text-primary text-gray-300 hover:font-bold transition-all cursor-pointer
                    ${hash === '#about' && 'text-white bg-[#131315] rounded-lg p-4 font-bold'} `}
                                whileHover={{ scale: 1.1 }}
                                onClick={() => {
                                    window.location.hash = "#about";
                                    setHash("#about"); // Manually set state to reflect immediately
                                }}>
                                About Us
                            </motion.li>
                        }
                        {user ? <motion.li
                            className={`hover:text-primary text-gray-300 hover:font-bold transition-all cursor-pointer
                        ${path == '/techzone' && 'text-white bg-[#131315] rounded-lg p-4 font-bold'} `
                            }
                            whileHover={{ scale: 1.1 }}
                            onClick={() => router.push("/techzone")}>
                            TechZone</motion.li> : <motion.li
                                className={`hover:text-primary text-gray-300 hover:font-bold transition-all cursor-pointer
                        ${hash == '#services' && 'text-white bg-[#131315] rounded-lg p-4 font-bold'} `
                                }
                                whileHover={{ scale: 1.1 }}
                                onClick={() => {
                                    window.location.hash = "#services";
                                    setHash("#services");
                                }}>
                            Services</motion.li>}
                        {user ? <motion.li
                            className={`hover:text-primary text-gray-300 hover:font-bold transition-all cursor-pointer
                        ${path == '/roadmap' && 'text-white bg-[#131315] rounded-lg p-4 font-bold'} `
                            }
                            whileHover={{ scale: 1.1 }}
                            onClick={() => router.push("/roadmap")}>
                            RoadMaps</motion.li> :
                            <motion.li
                                className={`hover:text-primary text-gray-300 hover:font-bold transition-all cursor-pointer
                        ${path == '/contact' && 'text-white bg-[#131315] rounded-lg p-4 font-bold'} `
                                }
                                whileHover={{ scale: 1.1 }}
                                onClick={() => setOpenDialog(true)}>
                                Contact Us</motion.li>}

                    </ul>

                    {user ? <motion.div className='bg-[#131315] py-2 px-4 items-center text-white justify-center font-bold rounded-full m-2' whileHover={{ scale: 1.2 }}>

                        <UserButton />


                    </motion.div> :
                        <motion.button
                            className='bg-white text-black py-4 px-8 font-bold rounded-lg'
                            whileHover={{ scale: 1.1 }}
                            onClick={() => router.push("/dashboard")}>
                            Sign In</motion.button>}
                </motion.div >
            </motion.div >
            {/* contact us form code  */}


            <Dialog open={openDialog} onOpenChange={setOpenDialog} className="bg-black">
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-xl text-white">Contact Us</DialogTitle>
                        <DialogDescription >
                            Get in touch with us.
                        </DialogDescription >
                        <form onSubmit={onSubmit}>
                            <div className='mt-5 my-3 '>
                                <label htmlFor="" className='text-white'>Name</label>
                                <Input className="bg-[#0c0c0d] text-white mt-2" placeholder="Ex. Deepak Singhal" required
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </div>
                            <div className=' my-3'>
                                <label htmlFor="" className='text-white'>Phone Number</label>
                                <Input className="bg-[#0c0c0d] text-white mt-2" placeholder="Ex. +9199......" type="tel" required
                                    onChange={(event) => setPhone(event.target.value)}
                                />
                            </div>
                            <div className=' my-3'>
                                <label htmlFor="" className='text-white'>Email Address</label>
                                <Input className="bg-[#0c0c0d] text-white mt-2" placeholder="Ex. abc@gmail.com" type="tel" required
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>
                            <div className=' my-3'>
                                <label htmlFor="" className='text-white'>Description</label>
                                <Textarea className="bg-[#0c0c0d] text-white mt-2" placeholder="Ex : I want to contact you...." required
                                    onChange={(event) => setDescription(event.target.value)}
                                />
                            </div>

                            <div className='gap-5 flex justify-end'>
                                <Button type="button" className="text-white" variant="ghost" onClick={() => setOpenDialog(false)}>Cancel</Button>
                                <Button type="submit" disabled={loading} >
                                    {/* {loading ?
                                                 <>
                                                     <LoaderCircle className='animate-spin' />'Generating from AI'
                                                 </> : 'Start Interview'
                                             } */}
                                    {loading ? <LoaderCircle className="animate-spin mr-2" /> : "Submit"}


                                </Button>
                            </div>
                        </form>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Header