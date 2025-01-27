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
import { chatSession } from '@/utils/GeminiAiModal'
import { db } from '@/utils/db'
import { v4 as uuidv4 } from 'uuid';
import { LoaderCircle } from 'lucide-react'
import { useUser } from '@clerk/nextjs'

const AddNewInterview = () => {
    const [openDialog, setOpenDialog] = useState(false)
    const [jobPosition,setJobPosition] = useState()
    const [jobDesc,setJobDesc]=useState()
    const [jobExperience,setJobExperience]=useState()
    const [loading,setLoading]=useState(false)
    const [jsonResponse,setJsonResponse]=useState([])
    const {user}=useUser() 
    const onSubmit=async (e)=>{
        setLoading(true)
        e.preventDefault()
        console.log(jobPosition,jobDesc,jobExperience)

        const InputPrompt=`Job position: ${jobPosition} Job Description: ${jobDesc} Years of Experience: ${jobExperience} Depends on this information please give me ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} interview questions with answers in JSON format, Give question and answer\n`;
             
            const result = await chatSession.sendMessage(InputPrompt);
            let responseText = result.response.text();
            responseText=(responseText).replace('```json','').replace('```','');

            const parsedResponse = JSON.parse(responseText);
            console.log(parsedResponse);
            setJsonResponse(parsedResponse);

           

            if(parsedResponse){
            const resp=await db.insert()
            .values({
                mockId:uuidv4(),
                jsonMockResp:responseText,
                jobPosition:jobPosition,
                jobDesc:jobDesc,
                jobExperience:jobExperience,
                createdBy:user?.primaryEmailAddress?.emailAddress,
                createdAt:moment().format('DD-MM-YYYY')
            }).returning({mockId:MockInterview.mockId});
        }else{
            console.log('Error in generating response')
        }

            setLoading(false)
    }
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
                        <form onSubmit={onSubmit}>
                            <div className='mt-5 my-2'>
                                <label htmlFor="">Job Role/Job Position</label>
                                <Input placeholder="Ex. Full Stack Developer" required
                                onChange={(event)=>setJobPosition(event.target.value)}
                                />
                            </div>
                            <div className=' my-2'>
                                <label htmlFor="">Job Description/Tech Stack</label>
                                <Textarea placeholder="Ex. React, Nextjs, Nodejs etc" required
                                onChange={(event)=>setJobDesc(event.target.value)}
                                />
                            </div>
                            <div className=' my-2'>
                                <label htmlFor="">Years of Experience</label>
                                <Input placeholder="Ex. 5" type="number" max="90" required 
                                onChange={(event)=>setJobExperience(event.target.value)}
                                />
                            </div>
                            <div className='gap-5 flex justify-end'>
                                <Button type="button" variant="ghost" onClick={() => setOpenDialog(false)}>Cancel</Button>
                                <Button type="submit" disabled={loading} >
                                    {loading?
                                    <>
                                    <LoaderCircle className='animate-spin'/>'Generating from AI'
                                    </>:'Start Interview'
                                }
                                    </Button>
                            </div>
                        </form>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div >
    )
}

export default AddNewInterview