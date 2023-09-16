type IXEvent<T extends any> = {
  /**
   *
   * @param data data
   * @returns data
   */
  send: (data: T) => T;
  /**
   *
   * @param callback callback
   * @returns unlisten function
   */
  listen: (callback: (data: T) => void) => () => void;
};

/**
 *
 * @returns event actions
 */
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
