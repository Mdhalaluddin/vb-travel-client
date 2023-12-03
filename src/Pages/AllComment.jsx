import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../hooks/useAxios";
import { Avatar, List, ListItem } from "@material-tailwind/react";
import {  ListItemAvatar, ListItemText } from "@mui/material";

const AllComment = () => {

    const { data: comments, refetch } = useQuery({
        queryKey: ['cmt'],
        queryFn: async () => {
            const result = await axiosSecure.get('/comment')
            return result;
        }
    })
    refetch()
    // console.log(comments?.data);


    return (
        <div>
            {
                comments?.data?.map(comment =>
                    <>
                        <div className="bg-red-50 my-3 w-1/2 mx-auto" key={comment._id}>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <ListItem alignItems="flex-start">
                                    <ListItemText
                                        primary={comment?.comment}
                                    />
                                    <ListItemAvatar alignItems="flex">
                                        {comment?.user?.photoURL ? <Avatar alt="Remy Sharp" src={comment?.user?.photoURL} /> : ''}
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={comment?.user?.displayName}
                                    />
                                </ListItem>
                            </List>
                        </div>
                    </>)
            }
        </div>
    );
};

export default AllComment;