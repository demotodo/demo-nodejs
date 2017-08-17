const os = require('os');

console.log(os.EOL);        // \r\n

console.log(os.platform()); // win32
console.log(os.arch());     // x64

console.log(os.endianness());   // LE

console.log(os.cpus());
// [ { model: 'Intel(R) Core(TM) i7-6700 CPU @ 3.40GHz',
//     speed: 3408,
//     times:
//         { user: 11589656,
//             nice: 0,
//             sys: 73203750,
//             idle: 189539750,
//             irq: 1115000 } },
//     { model: 'Intel(R) Core(TM) i7-6700 CPU @ 3.40GHz',
//         speed: 3408,
//         times:
//             { user: 9723593,
//                 nice: 0,
//                 sys: 33651343,
//                 idle: 230958109,
//                 irq: 297796 } },
//     { model: 'Intel(R) Core(TM) i7-6700 CPU @ 3.40GHz',
//         speed: 3408,
//         times:
//             { user: 10061515,
//                 nice: 0,
//                 sys: 73956375,
//                 idle: 190315156,
//                 irq: 280406 } },
//     { model: 'Intel(R) Core(TM) i7-6700 CPU @ 3.40GHz',
//         speed: 3408,
//         times:
//             { user: 11466015,
//                 nice: 0,
//                 sys: 32025921,
//                 idle: 230841109,
//                 irq: 546359 } },
//     { model: 'Intel(R) Core(TM) i7-6700 CPU @ 3.40GHz',
//         speed: 3408,
//         times:
//             { user: 10185453,
//                 nice: 0,
//                 sys: 72278500,
//                 idle: 191869093,
//                 irq: 331328 } },
//     { model: 'Intel(R) Core(TM) i7-6700 CPU @ 3.40GHz',
//         speed: 3408,
//         times:
//             { user: 7875218,
//                 nice: 0,
//                 sys: 34830515,
//                 idle: 231627312,
//                 irq: 292828 } },
//     { model: 'Intel(R) Core(TM) i7-6700 CPU @ 3.40GHz',
//         speed: 3408,
//         times:
//             { user: 9768687,
//                 nice: 0,
//                 sys: 44466218,
//                 idle: 220098140,
//                 irq: 340953 } },
//     { model: 'Intel(R) Core(TM) i7-6700 CPU @ 3.40GHz',
//         speed: 3408,
//         times:
//             { user: 8547468,
//                 nice: 0,
//                 sys: 62254843,
//                 idle: 203530734,
//                 irq: 280453 } } ]

console.log(os.constants);
// { UV_UDP_REUSEADDR: 4,
//     errno:
//     { E2BIG: 7,
//         EACCES: 13,
//         EADDRINUSE: 100,
//         EADDRNOTAVAIL: 101,
//         EAFNOSUPPORT: 102,
//         EAGAIN: 11,
//         EALREADY: 103,
//         EBADF: 9,
//         EBADMSG: 104,
//         EBUSY: 16,
//         ECANCELED: 105,
//         ECHILD: 10,
//         ECONNABORTED: 106,
//         ECONNREFUSED: 107,
//         ECONNRESET: 108,
//         EDEADLK: 36,
//         EDESTADDRREQ: 109,
//         EDOM: 33,
//         EEXIST: 17,
//         EFAULT: 14,
//         EFBIG: 27,
//         EHOSTUNREACH: 110,
//         EIDRM: 111,
//         EILSEQ: 42,
//         EINPROGRESS: 112,
//         EINTR: 4,
//         EINVAL: 22,
//         EIO: 5,
//         EISCONN: 113,
//         EISDIR: 21,
//         ELOOP: 114,
//         EMFILE: 24,
//         EMLINK: 31,
//         EMSGSIZE: 115,
//         ENAMETOOLONG: 38,
//         ENETDOWN: 116,
//         ENETRESET: 117,
//         ENETUNREACH: 118,
//         ENFILE: 23,
//         ENOBUFS: 119,
//         ENODATA: 120,
//         ENODEV: 19,
//         ENOENT: 2,
//         ENOEXEC: 8,
//         ENOLCK: 39,
//         ENOLINK: 121,
//         ENOMEM: 12,
//         ENOMSG: 122,
//         ENOPROTOOPT: 123,
//         ENOSPC: 28,
//         ENOSR: 124,
//         ENOSTR: 125,
//         ENOSYS: 40,
//         ENOTCONN: 126,
//         ENOTDIR: 20,
//         ENOTEMPTY: 41,
//         ENOTSOCK: 128,
//         ENOTSUP: 129,
//         ENOTTY: 25,
//         ENXIO: 6,
//         EOPNOTSUPP: 130,
//         EOVERFLOW: 132,
//         EPERM: 1,
//         EPIPE: 32,
//         EPROTO: 134,
//         EPROTONOSUPPORT: 135,
//         EPROTOTYPE: 136,
//         ERANGE: 34,
//         EROFS: 30,
//         ESPIPE: 29,
//         ESRCH: 3,
//         ETIME: 137,
//         ETIMEDOUT: 138,
//         ETXTBSY: 139,
//         EWOULDBLOCK: 140,
//         EXDEV: 18,
//         WSAEINTR: 10004,
//         WSAEBADF: 10009,
//         WSAEACCES: 10013,
//         WSAEFAULT: 10014,
//         WSAEINVAL: 10022,
//         WSAEMFILE: 10024,
//         WSAEWOULDBLOCK: 10035,
//         WSAEINPROGRESS: 10036,
//         WSAEALREADY: 10037,
//         WSAENOTSOCK: 10038,
//         WSAEDESTADDRREQ: 10039,
//         WSAEMSGSIZE: 10040,
//         WSAEPROTOTYPE: 10041,
//         WSAENOPROTOOPT: 10042,
//         WSAEPROTONOSUPPORT: 10043,
//         WSAESOCKTNOSUPPORT: 10044,
//         WSAEOPNOTSUPP: 10045,
//         WSAEPFNOSUPPORT: 10046,
//         WSAEAFNOSUPPORT: 10047,
//         WSAEADDRINUSE: 10048,
//         WSAEADDRNOTAVAIL: 10049,
//         WSAENETDOWN: 10050,
//         WSAENETUNREACH: 10051,
//         WSAENETRESET: 10052,
//         WSAECONNABORTED: 10053,
//         WSAECONNRESET: 10054,
//         WSAENOBUFS: 10055,
//         WSAEISCONN: 10056,
//         WSAENOTCONN: 10057,
//         WSAESHUTDOWN: 10058,
//         WSAETOOMANYREFS: 10059,
//         WSAETIMEDOUT: 10060,
//         WSAECONNREFUSED: 10061,
//         WSAELOOP: 10062,
//         WSAENAMETOOLONG: 10063,
//         WSAEHOSTDOWN: 10064,
//         WSAEHOSTUNREACH: 10065,
//         WSAENOTEMPTY: 10066,
//         WSAEPROCLIM: 10067,
//         WSAEUSERS: 10068,
//         WSAEDQUOT: 10069,
//         WSAESTALE: 10070,
//         WSAEREMOTE: 10071,
//         WSASYSNOTREADY: 10091,
//         WSAVERNOTSUPPORTED: 10092,
//         WSANOTINITIALISED: 10093,
//         WSAEDISCON: 10101,
//         WSAENOMORE: 10102,
//         WSAECANCELLED: 10103,
//         WSAEINVALIDPROCTABLE: 10104,
//         WSAEINVALIDPROVIDER: 10105,
//         WSAEPROVIDERFAILEDINIT: 10106,
//         WSASYSCALLFAILURE: 10107,
//         WSASERVICE_NOT_FOUND: 10108,
//         WSATYPE_NOT_FOUND: 10109,
//         WSA_E_NO_MORE: 10110,
//         WSA_E_CANCELLED: 10111,
//         WSAEREFUSED: 10112 },
//     signals:
//     { SIGHUP: 1,
//         SIGINT: 2,
//         SIGILL: 4,
//         SIGABRT: 22,
//         SIGFPE: 8,
//         SIGKILL: 9,
//         SIGSEGV: 11,
//         SIGTERM: 15,
//         SIGBREAK: 21,
//         SIGWINCH: 28 } }
