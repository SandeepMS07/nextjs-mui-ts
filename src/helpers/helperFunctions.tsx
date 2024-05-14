import { getFileUrl } from "./api/apiService";


export const handleFiles = async (e: React.ChangeEvent<HTMLInputElement>, files: any, types?: Array<string>, size?: number) => {
    // File Check
    if (!e.target.files) {
      return { message: 'Please Upload File', success: false };
    }
    const getFile = e.target.files[0];
    const customSize = size ? size : 2000000;
  
    // File Type Check
    if (types) {
      const getMatch: Array<string> = types?.filter((items) => {
        return items === getFile.type;
      });
      if (getMatch.length === 0) {
        return {
          message: `Only the ${types.map((items) => {
            return `${items} `;
          })} formats are accepted`,
          success: false,
        };
      }
    }
  
    // File Size Check
    if (getFile.size > customSize) {
      return { message: 'File is larger than 1MB', success: false };
    }
    try {
      const data = await getFileUrl(e.target.files[0]);
      if (data?.success) {
        return data;
      } else {
        return { message: 'Upload Failed, Try Again !', success: false };
      }
    } catch (err) {
      return { message: 'Upload Failed, Try Again !', success: false };
    }
  };