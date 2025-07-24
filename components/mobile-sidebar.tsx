"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, 
    SheetTrigger, 
    SheetContent
} from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";


const MobileSidebar = () => {
    //prevents hydration errors
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted){
        return null;
    }//prevents hydration errors


    return ( 
        <Sheet>
            <SheetTrigger>
                <Button variant="outline" size="icon" className="md:hidden">
                    <Menu />
                </Button>     
            </SheetTrigger> 
            <SheetContent side="left" className="p-0">
                <Sidebar />
            </SheetContent>
        </Sheet>

    );
}
export default MobileSidebar;