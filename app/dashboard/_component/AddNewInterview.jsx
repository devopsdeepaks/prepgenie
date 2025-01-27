"use client"
import React, { useState } from 'react'
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


const AddNewInterview = () => {
    const [openDialog, setOpenDialog] = useState(false)
    return (
        <div>
            <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all' onClick={() => setOpenDialog(true)}>
                <h2 className=' text-lg text-center'>+ Add New</h2>
            </div>
            <Dialog open={openDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-xl">Tell us more about job you are interviewing</DialogTitle>
                        <DialogDescription >
                            Add details about your job position, skills and year of experience.
                        </DialogDescription >
                        <form >
                            <div className='mt-5 my-2'>
                                <label htmlFor="">Job Role/Job Position</label>
                                <Input placeholder="Ex. Full Stack Developer" required />
                            </div>
                            <div className=' my-2'>
                                <label htmlFor="">Job Description/Tech Stack</label>
                                <Textarea placeholder="Ex. React, Nextjs, Nodejs etc" required />
                            </div>
                            <div className=' my-2'>
                                <label htmlFor="">Years of Experience</label>
                                <Input placeholder="Ex. 5" type="number" max="90" required />
                            </div>
                            <div className='gap-5 flex justify-end'>
                                <Button type="submit" >Start Interview</Button>
                                <Button type="button" variant="ghost" onClick={() => setOpenDialog(false)}>Cancel</Button>
                            </div>
                        </form>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div >
    )
}

export default AddNewInterview