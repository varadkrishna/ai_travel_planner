import React, { useState, useEffect } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
} from "@/components/ui/dialog";
//import { Button } from "@/components/ui/button"; // Assuming you're using a Button component
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import { toast } from 'sonner'; // Assuming you use 'sonner' for toasts

function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    console.log(user);
  }, []);

  const login = useGoogleLogin({
    onSuccess: GetUserProfile,
    onError: (error) => {
      console.error(error);
      toast.error("Google login failed");
    },
  });

  function GetUserProfile(tokenInfo) {
    axios
      .get("https://www.googleapis.com/oauth2/v1/userinfo", {
        headers: {
          Authorization: `Bearer ${tokenInfo?.access_token}`,
        },
      })
      .then((resp) => {
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        toast.success("Signed in successfully");
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to fetch user profile");
      });
  }

  return (
    <>
      <div className='p-3 shadow-sm flex justify-between items-center px-5'>
        <img src='/logo.svg' alt="Logo" />
        <div>
          {user ? (
            <div className='flex items-center gap-3'>
              <a href='/create-trip'>
                <Button variant='outline' className='rounded-full'>Create Trip</Button>
              </a>
              <a href='/my-trips'>
                <Button variant='outline' className='rounded-full'>My Trips</Button>
              </a>
              <Popover>
                <PopoverTrigger>
                  <img src={user?.picture} className='h-[35px] w-[35px] rounded-full' alt="Profile" />
                </PopoverTrigger>
                <PopoverContent>
                  <h2
                    className='cursor-pointer'
                    onClick={() => {
                      googleLogout();
                      localStorage.clear();
                      window.location.reload();
                    }}
                  >
                    Log out
                  </h2>
                </PopoverContent>
              </Popover>
            </div>
          ) : (
            <Button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={() => setOpenDialog(true)}
            >
              <FcGoogle className="mr-2" /> Sign In
            </Button>
          )}
        </div>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>Sign in to Continue</DialogHeader>
          <DialogDescription>
            <div className='flex justify-center'>
              <Button onClick={() => login()}>
                <FcGoogle className='mr-2' /> Sign in with Google
              </Button>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Header;
