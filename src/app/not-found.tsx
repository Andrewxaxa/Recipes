"use client";

import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { redirect } from "next/navigation";

const NotFoundPage: React.FC = () => {
  const handleClick = () => {
    redirect("/");
  };

  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      <Alert className="max-w-md w-full">
        <AlertTitle className="text-3xl font-bold">404 – Not Found</AlertTitle>
        <AlertDescription className="mt-2 text-muted-foreground">
          The page you/re looking for doesn/t exist or may have been moved.
        </AlertDescription>
      </Alert>

      <Button className="mt-6" onClick={handleClick}>
        Back to homepage
      </Button>
    </div>
  );
};

export default NotFoundPage;
