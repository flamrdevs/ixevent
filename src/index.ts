type IXEvent<T extends any> = {
  send: (data: T) => T;
  listen: (callback: (data: T) => void) => () => void;
};

const ixevent = <T extends any>(): IXEvent<T> => {
  const cbs = new Set<(data: T) => void>();

  return {
    send: (data) => {
      cbs.forEach((cb) => {
        cb(data);
      });
      return data;
    },
    listen: (callback) => {
      cbs.add(callback);
      return () => {
        cbs.delete(callback);
      };
    },
  };
};

export type { IXEvent };
export default ixevent;
