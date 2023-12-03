
{/* comment box start */ }
import { Textarea, Button } from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import AllComment from "./AllComment";
{/* comment box end */ }

const Comment = () => {
    // const comments = useLoaderData();
    // console.log(comments);
    const {user} = useContext(AuthContext); 
    {/* comment box start */ }
    const handleCommentBtn = e => {
        e.preventDefault();

        const form = e.target;

        const comment = form.comment.value;
        const newCommit = {comment, user}
        console.log(newCommit);

        fetch('https://vb-travel-server.vercel.app/comment',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCommit)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                form.reset('')
            }
        })

    }
    {/* comment box end */ }
    
    return (
        <div>
            <div>
                <AllComment></AllComment>
            </div>
            <form onSubmit={handleCommentBtn}>
                    <div className="relative bg-red-50 p-10  my-5 w-[50%]">
                        <Textarea variant="static" name="comment" placeholder="Your Comment" />
                        <div className="flex w-full justify-between py-1.5">
                            <div className="flex justify-end gap-2">
                                <Button size="sm" color="red" variant="text" className="rounded-md">
                                    Cancel
                                </Button>
                                <input type="submit" className="rounded-md btn-sm bg-red-200" value="Post Comment" />
                            </div>
                        </div>
                    </div>
                </form>
        </div>
    );
};

export default Comment;